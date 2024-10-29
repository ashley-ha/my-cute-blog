// components/PostCard.tsx
import { Post } from '@/app/types/posts';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <div className="group space-y-1.5">
      <Link href={`/posts/${post.slug}`}>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold">
              {post.title}
            </h2>
            <time className="font-mono text-xs text-muted-foreground">
              {formatDate(post.date)}
            </time>
          </div>
          <p className="text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
            {post.description}
          </p>
          {post.tags && (
            <div className="flex gap-2">
              {post.tags.map(tag => (
                <span 
                  key={tag} 
                  className="font-mono text-xs text-muted-foreground/60"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}