const { gql } = require('apollo-server-express');

const cityDefs = gql`

    type City {
        CityID: Int
        CityName: String
    }

    extend type City {
        Districts: [District]
    }

    extend type Query {
        cities: [City]
    }

`
;

module.exports = cityDefs;