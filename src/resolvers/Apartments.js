const { Apartments, AvailabilityCalendar } = require('../models/init-models');
const { Op } = require('sequelize');

const apartmentsResolver = {
    Query: {
        async apartments() {
            const apartments = await Apartments.findAll({
                include: {
                    all: true,
                    nested: true
                }
            });
            
            if (!apartments) {
                throw new Error('no apartments');
            } else {
                return apartments;
            }
        },

        async fetchAvailableApartments(_, args, context) {
            let fromDate = new Date(args.fromDate);
            let toDate = new Date(args.toDate);
            const availableApartments = await Apartments.findAll({
                include: {
                    model: AvailabilityCalendar, as: "AvailabilityCalendars", required: true, 
                    where: {
                        FromDate: {
                            [Op.lt]: fromDate
                        },
                        ToDate: {
                            [Op.gt]: toDate
                        }
                    }
                }
            });
            return availableApartments;
        }

    }
}

module.exports = apartmentsResolver;