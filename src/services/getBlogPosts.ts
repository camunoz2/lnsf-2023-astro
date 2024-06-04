// TODO: Update types to use with the codegen result
import { gql } from "graphql-request";
import { client } from "./graphqlClient";
import type { BlogEntry } from "../gql/graphql";

const QUERY = gql`
  query GetBlogEntries($first: Int!) {
    blogEntries(first: $first, orderBy: dateAndTime_DESC) {
      id
      title
      slug
      content {
        markdown
      }
      dateAndTime
      featuredImage {
        id
        url
        handle
      }
      category
    }
  }
`;

const getBlogPosts = async (first: number): Promise<BlogEntry[]> => {
  const response = await client.request(QUERY, { first });
  return response.blogEntries;
};

const getAllBlogPosts = async (): Promise<BlogEntry[]> => {
  const MAX_BLOGPOSTS = 1000;
  return getBlogPosts(MAX_BLOGPOSTS);
};

export { getBlogPosts, getAllBlogPosts };