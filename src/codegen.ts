import type { CodegenConfig } from "@graphql-codegen/cli";
import { loadEnv } from "vite";

const { SCHEMA_PATH } = loadEnv(import.meta.env.MODE, process.cwd(), "");

export default {
  overwrite: true,
  schema: SCHEMA_PATH,
  generates: {
    "src/generated/graphql.ts": {
      documents: "./src/**/*.graphql",
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
      config: {
        rawRequest: true,
        useTypeImports: true,
        documentMode: "string",
      },
    },
  },
} satisfies CodegenConfig;
