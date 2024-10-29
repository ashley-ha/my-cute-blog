// app/readings/page.tsx
import { ReadingList } from "@/components/ReadingList";
import { getReadingList } from "@/data/readings/readings";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function ReadingsPage() {
  const readingList = getReadingList();
  
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
          <h2 className="text-xl font-bold">Reading List</h2>
          <p className="ml-0.5 text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
            ashleys reads & recommendations
          </p>
        </div>
        <ReadingList 
          items={readingList} 
          limit={100} 
          showViewAll={false}
        />
      </div>
    </main>
  );
}