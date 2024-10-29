// data/reading.ts
import { ReadingItem } from '@/app/types/readings';

export const readingList: ReadingItem[] = [
  {
    title: "Man-Computer Symbiosis",
    url: "https://groups.csail.mit.edu/medg/people/psz/Licklider.html",
    author: "J. C. R. Licklider",
    type: "article",
    note: "1960's (!!) article on human-computer interaction",
    thoughts: "etc"
  },
  {
    title: "Works In Progress",
    url: "https://worksinprogress.co/",
    type: "blog",
    note: "new and underrated ideas to improve the world"
  },
  {
    title: "Technology Without Industry",
    url: "https://geohot.github.io/blog/jekyll/update/2021/01/18/technology-without-industry.html",
    author: "George Hotz",
    type: "article",
    note: "STOP BUILDING SHITTY TECHNOLOGY"
  },
  {
    title: "You Are Not Late",
    url: "https://kk.org/thetechnium/you-are-not-late/",
    author: "The Technium",
    type: "article",
    note: "I promise you are not late; just ✨ go build things ✨"
  },
  // Add more items as needed
];

export function getReadingList() {
  return readingList;
}