"use client";
import Image from "next/image";
import { formatDate } from "../../lib/formatDate";
import { Prose } from "@/components/Prose";
import { Container } from "./Container";
import { Heading } from "./Heading";
import Link from "next/link";
import { Paragraph } from "./Paragraph";

function ArrowLeftIcon(props: any) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BlogLayout({
  children,
  meta,
}: any) {

  return (
    <Container>
      <article>
        <header className="flex flex-col">
          <Link
            type="button"
            href="/blog"
            aria-label="Go back to articles"
            className="group mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition  "
          >
            <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 d" />
          </Link>

          <Heading className="text-neutral-400 py-4">{meta.title}</Heading>
          <time
            dateTime={meta.date}
            className="text-neutral-400 flex items-center text-base"
          >
            <Paragraph className=" text-neutral-400">
              {formatDate(meta.date)}
            </Paragraph>
          </time>
          <div className="w-full mt-4 aspect-w-16 aspect-h-10 rounded-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
            <Image
              src={meta.image}
              alt="thumbnail"
              height="800"
              width="800"
              className={`object-cover bg-transparent object-left-top w-full`}
            />
          </div>
        </header>
        <Prose className="text-neutral-400 mt-8">{children}</Prose>
      </article>
    </Container>
  );
}
