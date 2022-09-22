const { gql } = require('apollo-server-express');

const availabilityCalendarDefs = gql`

    type Apartment {
        ApartmentID: Int
        City: City
        District: District
        ApartmentCoordinates: POINT
    }

    extend type Query {
        apartments: [Apartment]
    }

`
;

module.exports = availabilityCalendarDefs;