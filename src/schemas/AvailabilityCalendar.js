const { gql } = require('apollo-server-express');

const availabilityCalendarDefs = gql`

    type AvailabilityCalendar {
        AvailabilityCalendarID: Int
        Apartment: Apartment
        FromDate: String
        ToDate: String
    }

    extend type Query {
        availabilityCalendars: [AvailabilityCalendar]
        isApartmentAvailable(apartmentId: Int!, date: String): Boolean 
        fetchApartmentAvailabilityTimes(apartmentId: Int!): [AvailabilityCalendar]
    }

`
;

module.exports = availabilityCalendarDefs;