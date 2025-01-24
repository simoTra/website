import React from "react";

import { twMerge } from "tailwind-merge";

export const Highlight = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    //<span className={twMerge("bg-neutral-50 px-1 py-0.5 underline decoration-orange-500", className)}>
    <span className={twMerge("underline decoration-orange-500", className)}>
      {children}
    </span>
  );
};
