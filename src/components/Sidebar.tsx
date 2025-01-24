"use client";
import { navlinks } from "@/constants/navlinks";
import { Navlink } from "@/types/navlink";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Heading } from "./Heading";
import { socials } from "@/constants/socials";
import { AnimatePresence, motion } from "framer-motion";
import { IconLayoutSidebarRightCollapse } from "@tabler/icons-react";
import { isMobile } from "@/lib/utils";

export const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: -220 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.2, ease: "linear" }}
            exit={{ x: -220 }}
            className="px-6 z-[100] py-10 bg-black max-w-[14rem] lg:w-fit fixed lg:relative h-screen left-0 flex flex-col justify-between"
          >
            <div className="flex-1 overflow-auto">
              <SidebarHeader />
              <Navigation setOpen={setOpen} />
            </div>
           
          </motion.div>
        )}
      </AnimatePresence>
      <button
        className="fixed lg:hidden bottom-4 right-4 h-8 w-8 border border-neutral-700 rounded-full backdrop-blur-sm flex items-center justify-center z-50 bg-neutral-800 hover:bg-neutral-700"
        onClick={() => setOpen(!open)}
      >
        <IconLayoutSidebarRightCollapse className="h-4 w-4 text-orange-500" />
      </button>
    </>
  );
};

export const Navigation = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <div className="flex flex-col space-y-1 my-10 relative z-[100]">
      {navlinks.map((link: Navlink) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => isMobile() && setOpen(false)}
          className={twMerge(
            "text-neutral-400 hover:text-orange-500 transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm",
            isActive(link.href) && "bg-neutral-800 text-orange-500"
          )}
        >
          <link.icon
            className={twMerge(
              "h-4 w-4 flex-shrink-0",
              isActive(link.href) && "text-orange-500"
            )}
          />
          <span>{link.label}</span>
        </Link>
      ))}

      <Heading
        as="p"
        className="text-sm md:text-sm lg:text-sm pt-10 px-2 text-neutral-500"
      >
        Socials
      </Heading>
      {socials.map((link: Navlink) => (
        <Link
          key={link.href}
          href={link.href}
          target="_blank"
          className={twMerge(
            "text-neutral-400 hover:text-orange-500 transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm"
          )}
        >
          <link.icon
            className={twMerge(
              "h-4 w-4 flex-shrink-0",
              isActive(link.href) && "text-orange-500"
            )}
          />
          <span>{link.label}</span>
        </Link>
      ))}
    </div>
  );
};

const SidebarHeader = () => {
  return (
    <div className="flex space-x-2">
      <Image
        src="/about/2about.jpg"
        alt="Avatar"
        height="40"
        width="40"
        className="object-cover object-top rounded-full flex-shrink-0"
      />
      <div className="flex text-sm flex-col">
        <p className="font-bold text-orange-500">Simone Traversi</p>
        <p className="font-light text-neutral-400">Technology Enthusiast</p>
      </div>
    </div>
  );
};
