// data/posts.ts
import { Post } from '@/app/types/posts';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Helper functions
const postsDirectory = path.join(process.cwd(), 'src/data/posts');

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      
      const { data, content } = matter(fileContents);
      
      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        draft: data.draft ?? false,
        content: content,
        tags: data.tags || [],
        readingTime: calculateReadingTime(content)
      } as Post;
    });

  return allPostsData
    .filter(post => !post.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | undefined {
    try {
      const fullPath = path.join(postsDirectory, `${slug}.md`);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      
      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        draft: data.draft ?? false,
        content: content,
        tags: data.tags || [],
        readingTime: calculateReadingTime(content)
      };
    } catch {
      return undefined;
    }
  }
  
  function calculateReadingTime(content: string): string {
    const wordsPerMinute = 200;
    const words = content.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  }