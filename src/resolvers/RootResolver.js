const citiesResolver = require('./Cities');
const districtsResolver = require('./Districts');
const apartmentsResolver = require('./Apartments');
const availabilityCalendarsResolver = require('./AvailabilityCalendars');

module.exports = [ 
    citiesResolver,
    districtsResolver,
    apartmentsResolver,
    availabilityCalendarsResolver
];