import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://coding-challenge-a8s934ksd.eu-central-1.elasticbeanstalk.com/graphql",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          ships: {
            // Don't cache separate results based on
            // any of this field's arguments.
            keyArgs: false,

            // Concatenate the incoming list items with
            // the existing list items.
            merge(existing = [], incoming) {
              return [...existing, ...incoming];
            },
          },
        },
      },
    },
  }),
});

export default client;
