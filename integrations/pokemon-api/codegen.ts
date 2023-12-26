import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    schema: "./src/schema.graphql",
    documents: undefined,
    generates: {
        "./src/generated/resolvers-types.ts": {
            config: {
                useIndexSignature: true,
            },
            plugins: ["typescript", "typescript-resolvers"],
        },
        "./src/generated/typedefs.ts": {
            plugins: ["plugins/generate-typedefs.cjs"],
        },
    },
};
export default config;
