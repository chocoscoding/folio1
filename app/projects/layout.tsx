import { Heading } from "@/components/heading";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Heading className="mb-1 mt-0">My Projects</Heading>
      <Heading className="mb-6 mt-6 text-xl font-light text-neutral-700">{`A selected few of my works`}</Heading>

      {children}
    </>
  );
};

export default layout;
