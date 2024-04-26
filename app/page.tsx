import { Cards } from "@/components/cards";
import { Text } from "@/components/text";
import { Heading } from "@/components/heading";

export default function Home() {
  return (
    <section>
      <Heading>
        Hi, I&apos;m Chocos <span className="wave">✌️</span>
      </Heading>

      <section className="prose prose-neutral mt-8 max-w-full dark:prose-invert">
        <Text>
          I&apos;m a developer driven by crafting beautiful, scalable, and functional applications. With over 3 years in the tech industry,
          I bring a strong foundation and experties to craft to every project.
          <br />
          My tech stacks include
          <span className="bg-blue-800/50 p-1 mx-[1px] rounded-md">TypeScript</span>,
          <span className="border border-dark-800/50 p-1 mx-[1px] rounded-md hover:bg-red">NextJS</span>,
          <span className="bg-green-800/50 p-1 mx-[1px] rounded-md hover:bg-red">NodeJS</span>,{" "}
          <span className="bg-pink-700/50 p-1 mx-[1px] rounded-md hover:bg-red">GraphQL</span>,
          <span className="bg-slate-800/50 p-1 mx-[1px] rounded-md hover:bg-red">React</span>,
          <span className="bg-yellow-700/50 p-1 mx-[1px] rounded-md hover:bg-red">Jest</span>,{" "}
          <span className="bg-white text-black p-1 mx-[1px] rounded-md hover:bg-red">Git</span>, and
          <span className="bg-orange-800/50 p-1 mx-1 rounded-md hover:bg-red">RabbitMQ</span>, allowing me to tackle complex challenges and
          deliver high-performance solutions.
        </Text>
      </section>

      <Cards />
    </section>
  );
}

export const revalidate = 3600;
