const { printSchemaWithDirectives } = require("@graphql-tools/utils");
const { stripIgnoredCharacters } = require("graphql");

// https://github.com/dotansimha/graphql-code-generator/issues/3899
const print = (schema) => `
  import gql from 'graphql-tag';
  export const typeDefs = gql\`${schema}\`;
`;
exports.plugin = (schema) => print(stripIgnoredCharacters(printSchemaWithDirectives(schema)));
