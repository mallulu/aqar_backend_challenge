const { Apartments, AvailabilityCalendar } = require('../models/init-models');
const { Op } = require('sequelize');
const { getApartmentsWithStreetNames } = require('../utils/FetchStreetNames');
const { Errors } = require('../errors/Error');


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
                return null;
                throw new Error(Errors.INVALID_DATA)
            }
            let availableApartments = await Apartments.findAll({
                include: {
                    model: AvailabilityCalendar, as: "AvailabilityCalendars", required: true, 
                    where: {
                        FromDate: {
                            [Op.lte]: fromDate
                        },
                        ToDate: {
                            [Op.gte]: toDate
                        }
                    }
                }
            });
            if (!availableApartments) {
                throw new Error (Errors.NOT_FOUND)
            }
            availableApartments = getApartmentsWithStreetNames(availableApartments);
            return availableApartments;
        }

    }
}

module.exports = apartmentsResolver;