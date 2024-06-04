import { gql } from "graphql-request";
import type { Config } from "../gql/graphql";
import { client } from "./graphqlClient";

const QUERY = gql`
{
  config(where: {id: "cle00dunc3ikr0bkm271oym1e"}) {
    id
    schoolName
    phone
    address
    workingHours
    institutionSeals {
      id
      name
      description
    }
    instagram
    facebook
  }
}

`;

const getConfig = async (): Promise<Config> => {
  const response = await client.request(QUERY);
  return response.config;
};

export { getConfig };