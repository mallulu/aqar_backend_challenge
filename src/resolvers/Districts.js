const { Districts } = require('../models/init-models');

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
                throw new Error('no districts');
            } else {
                return districts;
            }
          }
    }
}

module.exports = districtsResolver;