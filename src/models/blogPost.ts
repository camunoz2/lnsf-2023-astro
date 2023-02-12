type DateTime = string;
interface RichText {
  mardown: string;
}
interface ImageAsset {
  id: string;
  url: string;
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
