const { ApolloServer } = require('apollo-server-express');
const db = require('../config/sqlize');
const gqlschema = require('../schemas/RootSchema');
const { mergeResolvers } = require('@graphql-tools/merge')
const gqlresolvers = require('../resolvers/RootResolver');
const Errors = require('../errors/Error');
const {getStreetAddress} = require('../utils/FetchStreetNames');

let resolvers = mergeResolvers(gqlresolvers);
let server;


beforeAll(async () => {
  server = new ApolloServer({
    typeDefs: gqlschema,
    resolvers: resolvers
  });

  await db.authenticate();
  await server.start();
});

afterAll(async () => {
  await db.close();
  await server.stop();
});

// Cities tests
describe('cities', () => {
  test('number of cities', async () => {
    let result = await resolvers.Query.cities();
    expect(result.length).toEqual(2);
  });
});

// Districts tests
describe('districts', () => {
  test('number of districts', async () => {
    let result = await resolvers.Query.districts();
    expect(result.length).toEqual(4);
  });
});

// Apartments tests
describe('apartments', () => {
  test('number of apartments', async () => {
    let result = await resolvers.Query.apartments();
    expect(result.length).toEqual(14);
  });

  test('number of available apartments at given date', async () => {
    let args = {
      fromDate: '2022-01-17',
      toDate: '2022-01-18',
    };
    let result = await resolvers.Query.fetchAvailableApartments(null, args, null);
    expect(result.length).toEqual(4);
  });
  
  test('INVALID_REQUEST thrown when improper from/to dates are given for fetching available apartments', async () => {
    let args = {
      fromDate: '2022-01-20',
      toDate: '2022-01-18',
    };
    let thrownError;
    try {
      await resolvers.Query.fetchAvailableApartments(null, args, null);
    } catch (error) {
      thrownError = error;
    };
    expect(thrownError).toEqual(new Error(Errors.INVALID_REQUEST));
  });
});

// Availability calendars tests
describe('availabiliy calendars', () => {
  test('check number of availabilities', async () => {
    let result = await resolvers.Query.availabilityCalendars();
    expect(result.length).toEqual(18);
  });

  test('check apartment availability at given date', async () => {
    let args = {
      date: '2022-01-18',
      apartmentId: 1
    };
    const result = await resolvers.Query.isApartmentAvailable(null, args, null);
    expect(result).toEqual(true);
  });

  test('check availability times for given apartment', async () => {
    let args = {
      apartmentId: 11
    };
    const result = await resolvers.Query.fetchApartmentAvailabilityTimes(null, args, null);
    expect(result.length).toEqual(3);
  });
});

// FetchStreet tests
describe('fetch street', () => {
  test('check street name', async () => {
    let result = await getStreetAddress('24.767536,46.770504');
    expect(result).toEqual('RFFA3152، 3152 الأمير سعود الكبير بن عبدالعزيز آل سعو، 8265، حي الملك فيصل، Riyadh 13215, Saudi Arabia');
  });
});