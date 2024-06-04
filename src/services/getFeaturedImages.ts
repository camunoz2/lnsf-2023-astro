import { gql } from "graphql-request";
import { client } from "./graphqlClient";

const QUERY = gql`
  query GetFeaturedImage($id: ID!, $imageHeight: Int!, $imageWidth: Int!) {
    blogEntry(where: { id: $id }) {
      featuredImage {
        url(transformation: { image: { resize: { height: $imageHeight, width: $imageWidth } } })
      }
    }
  }
`;

const getFeaturedImage = async (
  id: string,
  imageHeight: number,
  imageWidth: number
): Promise<string | null> => {
  const response = await client.request(QUERY, { id, imageHeight, imageWidth });
  return response.blogEntry?.featuredImage?.url ?? null;
};

export { getFeaturedImage };