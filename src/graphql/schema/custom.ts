import { gql } from "apollo-server-micro";

// Custom date-time type for GraphQL
export default gql`
  scalar Date
  scalar Time
  scalar DateTime
`;