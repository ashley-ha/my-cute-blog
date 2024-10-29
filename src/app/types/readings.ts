export type ReadingItem = {
    title: string;
    url: string;
    author?: string;
    type?: 'article' | 'blog' | 'book' | 'resource';
    note?: string;
    thoughts?: string;
  }