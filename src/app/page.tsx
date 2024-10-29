import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HOME } from "@/data/posts/posts";
import Image from 'next/image'
import Link from 'next/link'


export const metadata: Metadata = {
  title: `${HOME.name} | ${HOME.home}`,
  description: HOME.summary,
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4">
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
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
              {HOME.contact.email ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`mailto:${HOME.contact.email}`}>
                    <MailIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {HOME.contact.tel ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`tel:${HOME.contact.tel}`}>
                    <PhoneIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {HOME.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="size-8"
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
            <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex print:text-[12px]">
              {HOME.contact.email ? (
                <a href={`mailto:${HOME.contact.email}`}>
                  <span className="underline">{HOME.contact.email}</span>
                </a>
              ) : null}
              {HOME.contact.tel ? (
                <a href={`tel:${HOME.contact.tel}`}>
                  <span className="underline">{HOME.contact.tel}</span>
                </a>
              ) : null}
            </div>
          </div>
          <Link href='/'>
          <Image
          alt={HOME.name}
          src= {HOME.Logo}
          height={150}
          width={150}>
          </Image>
          </Link>
        </div>
        <Section>
          <h2 className="text-xl font-bold">Writings</h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
            {HOME.summary}
          </p>
        </Section>
        </section>
    </main>
  );
}
