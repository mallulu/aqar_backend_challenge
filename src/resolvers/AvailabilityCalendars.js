const { AvailabilityCalendar, Apartments } = require('../models/init-models');
const { Op } = require('sequelize');

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
                throw new Error('no availabilityCalendars');
            } else {
                return availabilityCalendars;
            }
        },

        async isApartmentAvailable(_, args, context) {
            let date = args.date ? new Date(args.date) : new Date();
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
            })

            if (isAvailable) {
                return true;
            }

            return false;
        },
        
        async fetchApartmentAvailabilityTimes(_, args, context) {
            const availabilityTimes = await AvailabilityCalendar.findAll({
                include: {
                    model: Apartments, as: 'Apartment', required: true, where: {
                        ApartmentID: args.apartmentId
                    }
                }
            })

            return availabilityTimes
        }
    }
}

module.exports = availabilityCalendarsResolver;