import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSubgraphSchema } from "@apollo/subgraph";

import { PokemonAPI } from "./api-client";
import { Resolvers } from "./generated/resolvers-types";
import { typeDefs } from "./generated/typedefs";

interface PokemonResolveContext {
    token: string;
    dataSources: {
        pokemonApiClient: InstanceType<typeof PokemonAPI>;
    };
}

const resolvers: Resolvers<PokemonResolveContext> = {
    Query: {
        pokemons: () => {
            return [];
        },
        pokemon: (_parent, args, context, _info) => {
            return context.dataSources.pokemonApiClient.getByName(args.name);
        },
    },
};

const server = new ApolloServer<PokemonResolveContext>({
    schema: buildSubgraphSchema({
        typeDefs,
        resolvers,
    }),
});

const { url } = await startStandaloneServer(server, {
    async context({ req }) {
        return {
            token: "token-resolver-return-value",
            dataSources: {
                pokemonApiClient: new PokemonAPI({
                    cache: server.cache,
                }),
            },
        };
    },
    listen: { port: 4001 },
});

console.log(`🚀  Server ready at: ${url}`);
