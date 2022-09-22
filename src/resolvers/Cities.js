const { Cities } = require('../models/init-models');

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
                throw new Error('no cities');
            } else {
                return cities;
            }
          }
    }
}

module.exports = citiesResolver;