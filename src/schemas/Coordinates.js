const { gql } = require('apollo-server-express');

const coordinateDefs = gql`

    type Coordinates {
        type: String
        coordinates: [Float]
    }

`
;

module.exports = coordinateDefs;