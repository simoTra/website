import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { WorkHistory } from "@/components/WorkHistory";

export default function Home() {
  return (
    <Container>
      <Heading className="font-black">Work Experience</Heading>
      <Paragraph className="max-w-xl mt-4">
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
    </Container>
  );
}
