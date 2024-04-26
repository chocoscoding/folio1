import { getGithubContributions, getGithubStats } from "@/app/actions";
import { GithubStatsCard } from "@/components/cards/github";
import { LocationCard } from "@/components/cards/location";
import { MeCard } from "@/components/cards/me";
import { TimeCard } from "@/components/cards/time";
import { LinkedInCard } from "@/components/cards/linkedin";
import { Motion } from "@/components/motion";
import { DevTo } from "./devto";
import { CV } from "./cv";

export async function Cards() {
  const { followers, stars } = await getGithubStats();
  const contributions = await getGithubContributions();

  return (
    <Motion
      asChild
      animate="visible"
      variants={{
        visible: {
          transition: { delayChildren: 0.25, staggerChildren: 0.1 },
        },
      }}>
      <section className="mt-8 grid grid-cols-8 grid-rows-5 gap-4 md:grid-cols-7 md:grid-rows-3">
        <LocationCard />
        <MeCard />
        <GithubStatsCard followers={followers} stars={stars} contributions={contributions} />
        <LinkedInCard />
        <DevTo />
        <CV />
        <TimeCard />
      </section>
    </Motion>
  );
}
