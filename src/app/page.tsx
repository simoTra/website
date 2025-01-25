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
      <Heading className="underline decoration-orange-500 text-neutral-300">
        Simone Traversi
      </Heading>
      <Heading
        as="h2"
        className="text-xl md:text-lg lg:text-lg mb-4 text-orange-500"
      >
        Tech Journey
      </Heading>
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
              unoptimized={true}
              src={image}
              width={300}
              height={500}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
      </div>
      <Paragraph className="max-w-xl mt-4 text-neutral-300">
        I have always been passionate about technology and its potential to
        improve and simplify our lives. As a{" "}
        <Highlight>software developer</Highlight>, I love the process of{" "}
        <Highlight>prototyping</Highlight> and building innovative solutions
        that not only solve problems but also make things more efficient—or
        simply beautiful.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4 text-neutral-300">
        I have been teaching <Highlight>robotics</Highlight> for many years, and
        the ability to share my knowledge is something that I truly value.
        It&apos;s incredibly rewarding to know that by teaching others, my
        passion and expertise can inspire and empower the next generation of
        innovators—ensuring that this knowledge doesn&apos;t stop with me.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4 text-neutral-300">
        In my free time, I enjoy experimenting with{" "}
        <Highlight>robotics</Highlight> and diving into the world of{" "}
        <Highlight>3D printing</Highlight>, where I can bring ideas to life in a
        tangible way.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4 text-neutral-300">
        I&apos;m fascinated by how these technologies can be applied across
        industries, from <Highlight>manufacturing</Highlight> to{" "}
        <Highlight>design</Highlight>, and I&apos;m constantly{" "}
        <Highlight>learning</Highlight> and staying up-to-date with the latest
        trends in the tech world. For me, the combination of{" "}
        <Highlight>software development</Highlight> and{" "}
        <Highlight>making</Highlight> allows me to create unique, functional
        projects that have the power to simplify complex tasks and inspire
        creativity. I can't wait to see where this journey will take me.
      </Paragraph>

      <Heading
        as="h2"
        className="text-lg md:text-lg lg:text-lg mt-20 mb-4 text-neutral-300"
      >
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
                unoptimized={true}
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
