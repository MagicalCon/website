import { GraphQLClient } from "graphql-request";
import { getSdk } from "../generated/graphql";

export function getWrappedSdk() {
  return getSdk(new GraphQLClient(import.meta.env.SCHEMA_PATH));
}
