import { Jobs } from "@/app/experience/components/jobs";
import { WorkShell } from "@/app/experience/components/work-shell";
import { Heading } from "@/components/heading";
import { defaultVariants } from "@/components/motion.variants";

export const metadata = {
  title: "Experience - Chocoscoding",
  description: "Learn more about my work experience and what I'm currently working on.",
};

export default async function WorkPage() {
  return (
    <section>
      <Heading className="mb-1 mt-0">My work experience</Heading>

      <WorkShell initial="hidden" animate="visible" variants={defaultVariants}>
        <p>Learn more about my work experience, my focus areas, and what I&apos;m currently working on.</p>
        <Jobs />
      </WorkShell>
    </section>
  );
}
