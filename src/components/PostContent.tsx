import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Post } from '@/app/types/posts';
import CustomImage from './CustomImages';

interface PostContentProps {
  post: Post;
}

export function PostContent({ post }: PostContentProps) {
  return (
    <article className="prose prose-neutral dark:prose-invert max-w-none">
      <ReactMarkdown
  components={{
    img: (props) => (            
      <CustomImage
        src={props.src || ''}
        alt={props.alt || ''}
        width={props.width || 500}  
        height={props.height || 300} 
        className="rounded-lg"
        priority={true}
      />
    ),
  }}
>
  {post.content}
</ReactMarkdown>
    </article>
  );
}
