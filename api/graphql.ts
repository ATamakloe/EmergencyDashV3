import { ApolloServer } from "apollo-server-micro";
import { getDBConnection } from '../src/database';
import typeDefs from "../src/graphql/schema";
import resolvers from "../src/graphql/resolvers"

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: async () => {
        const dbConn = await getDBConnection();
        return { dbConn };
    },

    playground: true,
    introspection: true,
  });
  
  export default apolloServer.createHandler({ path: "/api/graphql" });