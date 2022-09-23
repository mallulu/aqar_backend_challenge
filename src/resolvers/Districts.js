const { Districts } = require('../models/init-models');
const Errors = require('../errors/Error');

const districtsResolver = {
    Query: {
        async districts() {
            const districts = await Districts.findAll({
                include: {
                    all: true,
                    nested: true
                }
            });
            
            if (!districts) {
                throw new Error(Errors.NOT_FOUND);
            } 
            return districts;
            
          }
    }
}

module.exports = districtsResolver;