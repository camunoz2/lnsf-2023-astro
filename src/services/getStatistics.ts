import { gql } from "graphql-request";
import type { Statistic } from "../gql/graphql";
import { client } from "./graphqlClient";

const QUERY = gql`
    statistics {
      id
      statName
      statQuantity
    }
`;

const getStatistics = async (): Promise<Statistic[]> => {
  const response = await client.request(QUERY);
  return response.statistics;
};

export { getStatistics };