"use client";
import { timeline } from "@/constants/timeline";
import React from "react";
import { Paragraph } from "./Paragraph";
import { Heading } from "./Heading";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import Image from "next/image";

export const WorkHistory = () => {
  return (
    <div>
      {timeline.map((item, index) => (
        <div
          className="flex md:flex-row flex-col space-y-10 md:space-y-0 space-x-10 my-20 relative"
          key={`timeline-${index}`}
        >
          <Paragraph
            className={`w-40 text-neutral-300 ${
              item.actual ? "underline decoration-orange-500" : ""
            }`}
          >
            {item.date}
          </Paragraph>
          <div className="flex flex-col md:flex-row md:items-start md:space-x-6">
            <div className="flex-1">
              <Heading
                as="h5"
                className={`ext-lg md:text-lg lg:text-lg  ${
                  item.actual ? "text-orange-500" : "text-neutral-300 "
                }`}
              >
                {item.company}
              </Heading>
              <Paragraph className="text-base md:text-base lg:text-base font-semibold  text-neutral-300 ">
                {item.title}
              </Paragraph>
              <Paragraph className="text-sm md:text-sm lg:text-sm mb-4  text-neutral-300 ">
                {item.description}
              </Paragraph>
              {item.responsibilities.map((responsibility, index) => (
                <Step key={responsibility}>{responsibility}</Step>
              ))}
            </div>
            {item.image && (
              <div className="mt-4 md:mt-0 md:ml-6 w-full md:w-40 lg:w-60">
                <Image
                  
                  src={`/${item.image}`}
                  alt={`${item.title} image`}
                  className="rounded-lg shadow-md w-full"
                  height={300}
                  width={600}
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

const Step = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex space-x-1 items-start my-2">
      <IconCircleCheckFilled className="h-3 w-4 mt-1 text-neutral-300" />
      <Paragraph className=" text-neutral-300  text-sm md:text-sm lg:text-sm">
        {children}
      </Paragraph>
    </div>
  );
};
