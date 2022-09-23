const { AvailabilityCalendar, Apartments } = require('../models/init-models');
const { Op } = require('sequelize');
const { getApartmentWithStreetName } = require('../utils/FetchStreetNames');
const Errors = require('../errors/Error');

const availabilityCalendarsResolver = {
    Query: {
        async availabilityCalendars() {
            const availabilityCalendars = await AvailabilityCalendar.findAll({
                include: {
                    all: true,
                    nested: true
                }
            });

            if (!availabilityCalendars) {
                throw new Error(Errors.NO_VALUE);
            };
            for (const availability of availabilityCalendars) {
                availability.Apartment = await getApartmentWithStreetName(availability.Apartment);
                return availabilityCalendars;
            };

        },

        async isApartmentAvailable(_, args, context) {
            let date = args.date ? new Date(args.date) : new Date();
            console.log(args);
            const isAvailable = await AvailabilityCalendar.findOne({
                include: {
                    model: Apartments, as: 'Apartment', required: true, where: {
                        ApartmentID: args.apartmentId
                    }
                },
                where: {
                    FromDate: {
                        [Op.lt]: date
                    },
                    ToDate: {
                        [Op.gt]: date
                    }
                }
            });

            if (isAvailable) {
                return true;
            };
            return false;
        },

        async fetchApartmentAvailabilityTimes(_, args, context) {
            const availabilityTimes = await AvailabilityCalendar.findAll({
                include: {
                    all: true, nested: true, required: true
                },
                where: {
                    ApartmentID: args.apartmentId
                }
            });

            if (!availabilityTimes) {
                throw new Error(Errors.NO_VALUE);
            };

            for (const availability of availabilityTimes) {
                availability.Apartment = await getApartmentWithStreetName(availability.Apartment);
            };
            return availabilityTimes;
        }
    }
};

module.exports = availabilityCalendarsResolver;