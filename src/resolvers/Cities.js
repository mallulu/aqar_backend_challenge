const { Cities } = require('../models/init-models');
const { Errors } = require('../errors/Error');

const citiesResolver = {
    Query: {
        async cities() {
            const cities = await Cities.findAll({
                include: {
                    all: true,
                    nested: true
                }
            });
            
            if (!cities) {
                throw new Error(Errors.NOT_FOUND);
            }
            return cities;

          }
    }
}

module.exports = citiesResolver;