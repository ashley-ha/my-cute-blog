import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HOME } from "@/data/home";
import { PostCard } from '@/components/PostCard';
import { getAllPosts } from '@/data/posts/posts';
import Image from 'next/image'
import Link from 'next/link'
import { Separator } from "@/components/ui/separator";
import { getReadingList } from '@/data/readings/readings';
import { ReadingList } from '@/components/ReadingList';


export const metadata: Metadata = {
  title: `${HOME.name} | ${HOME.home}`,
  description: HOME.summary,
};

export default function Page() {
  const posts = getAllPosts();
  const readingList = getReadingList();
  const postLimit = 3;

  return (
    <main className="container relative mx-auto min-h-screen flex flex-col scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <div className="mx-auto w-full max-w-2xl flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">{HOME.name}</h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
              {HOME.home}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={HOME.locationLink}
                target="_blank"
              >
                <GlobeIcon className="size-3" />
                {HOME.location}
              </a>
            </p>
          </div>
          <Link href='/'>
            <Image
              alt={HOME.name}
              src={HOME.Logo}
              height={200}
              width={200}
            />
          </Link>
        </div>
        <div className='text-start space-y-1.5'>
          <h2 className="text-xl font-bold">Original Writings</h2>
          <p className="ml-0.5 text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
            {HOME.summary}
          </p>
        </div>
        <Separator className='my-3'/>
        <Section>
        {posts.slice(0, postLimit).map(post => (
          <PostCard key={post.slug} post={post} />
        ))}
        {posts.length === 0 && (
          <p className="text-center text-muted-foreground">
            No posts yet. Check back soon!
          </p>
        )}
        {posts.length > postLimit && (
          <div className="flex justify-center pt-4">
            <Link href="/writings">
              <Button 
                variant="outline" 
                className="font-mono text-xs text-muted-foreground/60"
              >
                all writings →
              </Button>
            </Link>
          </div>
        )}
      </Section>
        <Separator className='my-3'/>
    
        
        <div className='text-start mt-1'>
          <h2 className="text-xl font-bold">Reading List</h2>
          <p className="ml-0.5 text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
            my curated reading list of things i&apos;ve read and loved (hover for notes)
          </p>
        </div>

        <Section className="space-y-2 mt-1.5">
          <ReadingList 
            items={readingList} 
            limit={4}
            showViewAll={true}
          />
        </Section>
      </div>
      <div className="mt-auto pt-6 flex justify-center gap-x-2 font-mono text-sm text-muted-foreground/60 print:hidden">
        {HOME.contact.email ? (
          <Button
            className="size-4"
            variant="outline"
            size="icon"
            asChild
          >
            <a href={`mailto:${HOME.contact.email}`}>
              <MailIcon className="size-4" />
            </a>
          </Button>
        ) : null}
        {HOME.contact.social.map((social) => (
          <Button
            key={social.name}
            className="size-4"
            variant="outline"
            size="icon"
            asChild
          >
            <a href={social.url}>
              <social.icon className="size-4" />
            </a>
          </Button>
        ))}
      </div>
    </main>
  );
}