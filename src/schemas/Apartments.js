const { gql } = require('apollo-server-express');

const apartmentDefs = gql`

    type Apartment {
        ApartmentID: Int
        ApartmentName: String
        City: City
        District: District
        ApartmentCoordinates: Coordinates
    }

    extend type Apartment {
        AvailabilityCalendars: [AvailabilityCalendar]
    }

    extend type Query {
        apartments: [Apartment]
        fetchAvailableApartments(fromDate: String!, toDate: String!): [Apartment]
    }

`
;

module.exports = apartmentDefs;