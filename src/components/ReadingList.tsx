// components/ReadingList.tsx
import { ReadingItem } from '@/app/types/readings';
import { ExternalLink } from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card";

interface ReadingListProps {
    items: ReadingItem[];
    limit?: number;
    showViewAll?: boolean;
  }
  
  export function ReadingList({ items, limit = 4, showViewAll = true }: ReadingListProps) {
    const displayItems = limit ? items.slice(0, limit) : items;
    const midpoint = Math.ceil(displayItems.length / 2);
    const leftItems = displayItems.slice(0, midpoint);
    const rightItems = displayItems.slice(midpoint);
  
    const ReadingItem = ({ item }: { item: ReadingItem }) => (
        <HoverCard>
          <HoverCardTrigger asChild>
            <div className="grid grid-rows-[auto_auto_auto_auto] gap-1 py-2">
              <div className="flex items-center gap-1.5">
                <span className="font-mono text-sm hover:underline">{item.title}</span>
                <ExternalLink className="size-3 opacity-50 flex-shrink-0" />
              </div>
              {item.author && (
                <p className="font-mono text-xs text-muted-foreground">
                  by {item.author}
                </p>
              )}
              {item.note && (
                <p className="font-mono text-xs text-muted-foreground/60">
                  {item.note}
                </p>
              )}
              {item.type && (
                <span className="font-mono text-xs text-muted-foreground/60">
                  #{item.type}
                </span>
              )}
            </div>
          </HoverCardTrigger>
          {item.thoughts && (
            <HoverCardContent 
              className="w-80 font-mono text-sm" 
              side="right" 
              align="start"
            >
              <p className="text-pretty text-muted-foreground/80">
              &quot;{item.thoughts}&quot;
              </p>
            </HoverCardContent>
          )}
        </HoverCard>
    );
  
    return (
      <div className="space-y-4">
        <div className="relative grid grid-cols-2 gap-16">
          {/* Left column */}
          <div className="space-y-2">
            {leftItems.map((item, index) => (
              <a 
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ReadingItem item={item} />
              </a>
            ))}
          </div>
          
          {/* Centered separator */}
          <div className="absolute left-1/2 top-0 bottom-0 -ml-px">
            <Separator orientation="vertical" className="h-full" />
          </div>
  
          {/* Right column */}
          <div className="space-y-2 flex flex-col items-end">
            {rightItems.map((item, index) => (
              <a 
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <ReadingItem item={item} />
              </a>
            ))}
          </div>
        </div>
        
        {showViewAll && items.length > limit && (
          <div className="flex justify-center pt-4">
            <Link href="/readings">
              <Button 
                variant="outline" 
                className="font-mono text-xs text-muted-foreground/60"
              >
                view all readings →
              </Button>
            </Link>
          </div>
        )}
      </div>
    );
  }