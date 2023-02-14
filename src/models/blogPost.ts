type DateTime = string;
interface RichText {
  markdown: string;
}
export interface ImageAsset {
  id: string;
  url: string;
  handle: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  dateAndTime: DateTime;
  content: RichText;
  featuredImage: ImageAsset;
  category: string[];
}
