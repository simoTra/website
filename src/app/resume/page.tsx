import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { WorkHistory } from "@/components/WorkHistory";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function Home() {
  return (
    <Container>
      <Heading className="underline decoration-orange-500 text-neutral-300">
        Work Experience
      </Heading>
      <Paragraph className="max-w-xl mt-4 text-neutral-300">
        I started working right after high school and continued throughout
        university.{" "}
        <Highlight>
          Combining work with my passions has been a great privilege
        </Highlight>
        , with 6 years of experience in <Highlight>robotics</Highlight> and 3 in{" "}
        <Highlight>programming</Highlight>. I especially enjoy teaching robotics
        to students, as sharing knowledge is incredibly rewarding.
      </Paragraph>
      <WorkHistory />
      <Link
        key={"/simoneTraversiResume.pdf"}
        href={"/simoneTraversiResume.pdf"}
        target="_blank"
        className={twMerge(
          "text-neutral-300 hover:text-orange-500 transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm"
        )}
      >
        Download Resume{" "}
      </Link>
    </Container>
  );
}
