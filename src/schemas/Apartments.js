const { gql } = require('apollo-server-express');

const apartmentDefs = gql`

    type Apartment {
        ApartmentID: Int
        City: City
        District: District
        ApartmentCoordinates: Float
    }

    extend type Apartment {
        AvailabilityCalendars: [AvailabilityCalendar]
    }

    extend type Query {
        apartments: [Apartment]
    }

`
;

module.exports = apartmentDefs;