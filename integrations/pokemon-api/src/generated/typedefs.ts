
  import gql from 'graphql-tag';
  export const typeDefs = gql`schema@link(url:"https://specs.apollo.dev/federation/v2.0" import:["@key" "@shareable"]){query:Query}type Pokemon{base_experience:Int height:Int id:Int!name:String!order:Int!}type PokemonName{language:[PokemonNameLocalizationInfo]!name:String!}type PokemonNameLocalizationInfo{name:String!url:String!}type Query{pokemon(name:String!):Pokemon!pokemons:[Pokemon]!}`;
