const citiesResolver = require('./Cities');
const districtsResolver = require('./Districts');
const apartmentsResolver = require('./Apartments');
const availabilityCalendarsResolver = require('./AvailabilityCalendars');
const dateResolver = require('./custom-types/Date')

module.exports = [ 
    dateResolver,
    citiesResolver,
    districtsResolver,
    apartmentsResolver,
    availabilityCalendarsResolver
];