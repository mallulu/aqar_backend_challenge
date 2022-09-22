const { gql } = require('apollo-server-express');

const districtDefs = gql`

    type District {
        DistrictID: Int
        DistrictName: String
        City: City
    }

    extend type Query {
        districts: [District]
    }

`
;

module.exports = districtDefs;