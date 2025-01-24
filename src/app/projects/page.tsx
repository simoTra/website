import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Projects } from "@/components/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Simone Traversi",

  description:
    "Simone Traversi is a technology enthusiast in all its forms. He loves combining software and hardware to create innovative solutions."
};

export default function ProjectPage() {
  return (
    <Container>
      <Heading className="font-black mb-10">Some of my projects</Heading>
      <Projects />
    </Container>
  );
}
