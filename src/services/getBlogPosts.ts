import type { BlogPost } from "../models/blogPost";

const query = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    query: `
    {
      blogEntries {
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
const blogPosts: BlogPost[] = json.data.blogEntries;

export { blogPosts };
