import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Simone Traversi",

  description:
    "Simone Traversi is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely."
};

export default function Projects() {
  return (
    <Container>
      <Heading className="font-black mb-2">Contact Me</Heading>
      <Contact />
    </Container>
  );
}
