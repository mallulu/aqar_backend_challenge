const { GraphQLScalarType, Kind } = require('graphql');

const dateScalar = new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',

    serialize(value) {
        // Convert outgoing Date to d/m/yyyy format
        return value.toLocaleDateString(); 
    },

    parseValue(value) {
        // Creating new date from given value
        return new Date(value); 
    },

    parseLiteral(grahpqlDateType) {
        if (grahpqlDateType.kind === Kind.INT) {

            // Convert graphql date type string to integer and then to Date
            return new Date(parseInt(grahpqlDateType.value, 10)); 
        };

        // Invalid value (not an integer)
        return null; 
    },
});

const dateResolver = {
    Date: dateScalar
};

module.exports = dateResolver;