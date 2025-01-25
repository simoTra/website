import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { getAllBlogs } from "../../../lib/getAllBlogs";
import { Blogs } from "@/components/Blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Simone Traversi",

  description:
    "Simone Traversi is a technology enthusiast in all its forms. He loves combining software and hardware to create innovative solutions.",
};

export default async function Blog() {
  const blogs = await getAllBlogs();
  const data = blogs.map(({ component, ...meta }) => meta);

  return (
    <Container>
      <Heading className="underline decoration-orange-500 text-neutral-300">
        Just a place to share tought about tech
      </Heading>
      <Blogs blogs={data} />
    </Container>
  );
}
