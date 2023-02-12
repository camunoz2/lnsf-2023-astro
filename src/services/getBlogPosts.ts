import type { BlogPost } from "../models/blogPost";

const getBlogPost = async (first: number): Promise<BlogPost[]> => {
  const query = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      {
        blogEntries(first: ${first}, orderBy: dateAndTime_DESC) {
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
          }
          category
        }
      }`,
    }),
  };
  const response = await fetch(import.meta.env.HYGRAPH_ENDPOINT, query);
  const json = await response.json();
  return json.data.blogEntries;
};

const getAllBlogPosts = async (): Promise<BlogPost[]> => {
  const MAX_BLOGPOSTS = 1000;
  return getBlogPost(MAX_BLOGPOSTS);
};

export { getBlogPost, getAllBlogPosts };
