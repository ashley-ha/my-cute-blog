import MarkdownIt from 'markdown-it';
import { Post } from '@/app/types/posts';

const md = new MarkdownIt({
  html: true,
  breaks: true,
  linkify: true,
});

interface PostContentProps {
  post: Post;
}

export function PostContent({ post }: PostContentProps) {
  const htmlContent = md.render(post.content);
  
  return (
    <article className="prose prose-neutral dark:prose-invert max-w-none">
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </article>
  );
}