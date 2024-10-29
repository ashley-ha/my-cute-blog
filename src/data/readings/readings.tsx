// data/reading.ts
import { ReadingItem } from '@/app/types/readings';

export const readingList: ReadingItem[] = [
  {
    title: "Man-Computer Symbiosis",
    url: "https://groups.csail.mit.edu/medg/people/psz/Licklider.html",
    author: "J. C. R. Licklider",
    type: "article",
    note: "1960's (!!) article on human-computer interaction",
    thoughts: "i still cant believe this was written in the 60's. Licklider was truly ahead of his time"
  },
  {
    title: "Works In Progress",
    url: "https://worksinprogress.co/",
    type: "blog",
    note: "new and underrated ideas to improve the world",
    thoughts: "just a fantastic blog"
  },
  {
    title: "Technology Without Industry",
    url: "https://geohot.github.io/blog/jekyll/update/2021/01/18/technology-without-industry.html",
    author: "George Hotz",
    type: "article",
    note: "STOP BUILDING SHITTY TECHNOLOGY",
    thoughts: "andrej karpathy shared this recently and i cant stop thinking about it"
  },
  {
    title: "You Are Not Late",
    url: "https://kk.org/thetechnium/you-are-not-late/",
    author: "The Technium",
    type: "article",
    note: "I promise you are not late; just ✨ go build things ✨",
    thoughts: "even though this is from 2014, i still found this relavent and fitting for todays world. esp with everyone saying things like 'ai will take all the jobs and startups will die'. bunch of nonsense!"
  },
  {
    title: "Situational Awareness",
    url: "https://situational-awareness.ai/",
    author: "Leopold Aschenbrenner",
    type: "article",
    note: "Leopold predicts a rapid progression to superintelligent AI by 2027, & warns about technological & geopolitical implications",
    thoughts: "he presents a v compelling but concerning timeline for AGI development, backed by technical analysis of scaling laws and compute trends. he predicts there will be an 'intelligence explosion' where AGI systems could rapidly self-improve and achieve superintelligence within months of initial AGI. he also talks about the urgent national security implications & calls for massive government intervention (even comparing the AGI race to the Manhattan Project). overall, pretty important questions about AI safety, international cooperation, and the need for proper governance structures as we approach AGI."
  }
    
  // more items placeholder.. 
];

export function getReadingList() {
  return readingList;
}