import { gql } from "apollo-server-micro";

import sensorSchema from './sensor';
import customSchema from './custom';

const linkSchema = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

export default [linkSchema, sensorSchema, customSchema];