export interface SEOData {
  title: string;
  description: string;
  image: string;
  alt: string;
  published: string;
  modified: string;
  author: string;
  slug: string;
  tags: string[];
}

export interface Post {
  fullPath: string;
  slug: string;
  frontMatter: {
    title: string;
    description: string;
    image: string;
    alt: string;
    published: string;
    modified: string;
    author: string;
    slug: string;
    tags: string[];
  };
}
