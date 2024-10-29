import { PostCard } from "@/components/PostCard";
import { getAllPosts } from "@/data/posts/posts";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Section } from "@/components/ui/section";

export default function WritingsPage() {
  const posts = getAllPosts();
  
  return (
    <main className="container relative mx-auto min-h-screen flex flex-col scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <div className="mx-auto w-full max-w-2xl flex flex-col gap-2">
        <div className="flex items-center">
          <Link href="/">
            <Button variant="ghost" size="icon" className="mr-2">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className='text-start space-y-1.5'>
          <h2 className="text-xl font-bold">Original Writings</h2>
          <p className="ml-0.5 text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
          my writings, 1am thoughts & things i care about
          </p>
        </div>
        <Section>
          {posts.map(post => (
            <PostCard key={post.slug} post={post} />
          ))}
          {posts.length === 0 && (
            <p className="text-center text-muted-foreground">
              No posts yet. Check back soon!
            </p>
          )}
        </Section>
      </div>
    </main>
  );
}