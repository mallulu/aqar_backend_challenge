const { Apartments, AvailabilityCalendar } = require('../models/init-models');
const { Op } = require('sequelize');
const { getApartmentsWithStreetNames } = require('../utils/FetchStreetNames');
const Errors = require('../errors/Error');


const apartmentsResolver = {
    Query: {
        async apartments() {
            let apartments = await Apartments.findAll({
                include: {
                    all: true,
                    nested: true
                }
            });
            
            if (!apartments) {
                throw new Error(Errors.NOT_FOUND);
            }
            apartments = await getApartmentsWithStreetNames(apartments);
            return apartments;
        },

        async fetchAvailableApartments(_, args, context) {
            let fromDate = new Date(args.fromDate);
            let toDate = new Date(args.toDate);

            if (fromDate > toDate) {
                throw new Error(Errors.INVALID_REQUEST);
            }
            let availableApartments = await Apartments.findAll({
                where: {
                    '$AvailabilityCalendars.FromDate$': {
                        [Op.lte]: fromDate
                    },
                    '$AvailabilityCalendars.ToDate$': {
                        [Op.gte]: toDate
                    }
                },
                include: {
                    all: true, nested: true
                }
            });
            if (!availableApartments) {
                throw new Error (Errors.NOT_FOUND);
            };
            availableApartments = getApartmentsWithStreetNames(availableApartments);
            return availableApartments;
        }

    }
};

module.exports = apartmentsResolver;