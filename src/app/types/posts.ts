export type Post = {
    slug: string;
    title: string;
    description: string;
    date: string;
    draft: boolean;
    content: string;
    tags?: string[];
    readingTime?: string;
  };