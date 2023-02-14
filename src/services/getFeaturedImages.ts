import type { BlogPost } from "../models/blogPost";

const getFeaturedImages = async (
  id: string,
  imageHeight: number,
  imageWidth: number
): Promise<BlogPost[]> => {
  const query = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      {
        blogEntry(where: {id: ${id}}) {
          featuredImage {
            url(transformation: {image: {resize: {height: ${imageHeight}, width: ${imageWidth}}}})
          }
        }
      }
      `,
    }),
  };
  const response = await fetch(import.meta.env.HYGRAPH_ENDPOINT, query);
  const json = await response.json();
  return json.data.blogEntry;
};

export { getFeaturedImages };
