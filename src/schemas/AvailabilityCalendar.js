const { gql } = require('apollo-server-express');

const availabilityCalendarDefs = gql`
    scalar Date
    
    type AvailabilityCalendar {
        AvailabilityCalendarID: Int
        Apartment: Apartment
        FromDate: Date
        ToDate: Date
    }

    extend type Query {
        availabilityCalendars: [AvailabilityCalendar]
        isApartmentAvailable(apartmentId: Int!, date: Date): Boolean 
        fetchApartmentAvailabilityTimes(apartmentId: Int!, date: Date): [AvailabilityCalendar]
    }

`
    ;

module.exports = availabilityCalendarDefs;