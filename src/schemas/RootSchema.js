const { gql } = require('apollo-server-express');
const cityDefs = require('./Cities');
const districtDefs = require('./Districts');
const apartmentDefs = require('./Apartments');
const availabilityCalendarDefs = require('./AvailabilityCalendar');
const coordinateDefs = require('./Coordinates');

const rootSchema = gql`

    type Query {
        _: Boolean
    }

    type Mutation {
        _: Boolean
    }
`
;

module.exports = [ 
    rootSchema,
    cityDefs,
    districtDefs,
    coordinateDefs,
    apartmentDefs,
    availabilityCalendarDefs
];