// data/posts.ts
import { Post } from '@/app/types/posts';

export const posts: Post[] = [
  {
    slug: 'first-post',
    title: 'Hello Internet',
    description: 'im ashley, welcome :)',
    date: '2024-10-28',
    draft: false,
    content: '...',
    tags: ['introduction', 'personal'],
    readingTime: '3 min read'
  },
  {
    slug: 'second-post',
    title: 'Thiry Thoughts',
    description: 'thiry life learnings approaching my thirieth rotation around the sun',
    date: '2024-10-29',
    draft: false,
    content: '...',
    tags: ['personal'],
    readingTime: '3 min read'
  },

];

// Helper functions
export function getAllPosts() {
  return posts
    .filter(post => !post.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string) {
  return posts.find(post => post.slug === slug);
}