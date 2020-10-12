import { gql } from "apollo-server-micro";

export default gql`
    extend type Query {
        getAllSensors: [Sensor!]
        getSensor(_id: ID!): Sensor
    }
    type Sensor {
        _id: ID!
        name: String!
        type: String!
        latitude: String!
        longitude: String!
        waterLevel: String!
    }
`;