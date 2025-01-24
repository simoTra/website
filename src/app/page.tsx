"use client";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Projects } from "@/components/Projects";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const images = [
    "/about/1about.jpeg",
    "/about/2about.jpg",
    "/about/3about.jpg",
  ];
  const imagesWorks = [
    "/about/st_ms_wc.jpeg",
    "/about/sanoma.jpg",
    "/about/comau.jpg",
  ];
  return (
    <Container>
      <Heading className="underline decoration-orange-500 text-neutral-400">
        Simone Traversi
      </Heading>
      <Heading
        as="h2"
        className="text-xl md:text-lg lg:text-lg mb-4 text-orange-500"
      >
        Tech Journey
      </Heading>
      <Paragraph className="max-w-xl mt-4 text-neutral-400">
        I have always been passionate about technology and how it can change and
        improve our lives. As a <Highlight>software developer</Highlight>, I
        love being able to create and build new programs that solve problems and
        make things more efficient.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4 text-neutral-400">
        In my free time, I enjoy tinkering with robots and exploring the world
        of <Highlight>3D printing</Highlight>
      </Paragraph>
      <Paragraph className="max-w-xl mt-4 text-neutral-400">
        I find it fascinating to see how these technologies can be used in
        various industries, from manufacturing to healthcare. I am constantly{" "}
        <Highlight>learning</Highlight> and staying up-to-date with the latest
        developments in the tech world, and I can&apost wait to see what the future
        holds.
      </Paragraph>
      <Heading
        as="h2"
        className="text-lg md:text-lg lg:text-lg mt-20 mb-4 text-neutral-400"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
          {imagesWorks.map((image, index) => (
            <motion.div
              key={image}
              initial={{
                opacity: 0,
                y: 50,
                rotate: 0,
              }}
              animate={{
                opacity: 1,
                y: 0,
                rotate: index % 2 === 0 ? -3 : 3,
              }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
            >
              <Image
                src={image}
                width={300}
                height={500}
                alt="about"
                className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
          {images.map((image, index) => (
            <motion.div
              key={image}
              initial={{
                opacity: 0,
                y: -50,
                rotate: 0,
              }}
              animate={{
                opacity: 1,
                y: 0,
                rotate: index % 2 === 0 ? 3 : -3,
              }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
            >
              <Image
                src={image}
                width={300}
                height={500}
                alt="about"
                className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
              />
            </motion.div>
          ))}
        </div>
        Some of my projects
      </Heading>
      <Projects />
      {/* <TechStack /> */}
    </Container>
  );
}
