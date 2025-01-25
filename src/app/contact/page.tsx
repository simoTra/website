import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { Highlight } from "@/components/Highlight";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Simone Traversi",

  description:
    "Simone Traversi is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
};

export default function Projects() {
  return (
    <Container>
      <Heading className="underline decoration-orange-500 text-neutral-300 pb-12">
        Contact me if you found something interesting
      </Heading>
      <Contact />
      <Paragraph className="max-w-xl mt-4 text-neutral-300">
        Or write an email at{" "}
        <Highlight>
          <a href="mailto:simone.traversi4@gmail.com">
            {" "}
            simone.traversi4@gmail.com
          </a>{" "}
        </Highlight>
      </Paragraph>
    </Container>
  );
}
