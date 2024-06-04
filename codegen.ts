
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://sa-east-1.cdn.hygraph.com/content/cldswhdze4qtt01uoe5mdb97p/master",
  documents: "src/services/*.ts",
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
