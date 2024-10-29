import type { Metadata } from "next";
import { getPostBySlug } from "@/data/posts/posts"; // Updated import path
import { formatDate } from "@/lib/utils";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({
  html: true,
  breaks: true,
  linkify: true,
});

type Props = {
  params: { slug: string }
}

interface PostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found'
    }
  }

  return {
    title: post.title,
    description: post.description,
  }
}

export default function PostPage({ params }: PostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  // Convert Markdown content to HTML
  const contentHtml = md.render(post.content);

  return (
    <main className="container relative mx-auto min-h-screen flex flex-col scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <div className="mx-auto w-full max-w-2xl flex flex-col gap-4">
        <div className="flex items-center">
          <Link href="/">
            <Button variant="ghost" size="icon" className="mr-2">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <article className="prose prose-neutral dark:prose-invert">
          <header className="space-y-2 not-prose">
            <h1 className="text-2xl font-bold">{post.title}</h1>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <time className="font-mono text-sm">
                  {formatDate(post.date)}
                </time>
                {post.readingTime && (
                  <>
                    <span>·</span>
                    <span className="font-mono text-sm">{post.readingTime}</span>
                  </>
                )}
              </div>
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
          </header>
          
          <Separator className="my-4" />
          
          <div 
            className="font-mono text-sm leading-relaxed markdown-content"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </article>
      </div>
    </main>
  );
}