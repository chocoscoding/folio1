export type Job = {
  company: string;
  position: string;
  introDescription: React.ReactNode;
  description?: React.ReactNode;
  from: string;
  to: string;
};

export const rww: Job = {
  company: "Remote Worldwide",
  position: "Full-stack Developer",
  introDescription: (
    <span className=" italic">
      I am working at RWW, where we a building a hiring and job search platform which fosters Worldwide remote work.
    </span>
  ),
  from: "2024",
  to: "2025",
};
export const bbt: Job = {
  company: "Beauty By Tolu",
  position: "Full-stack Developer (contract)",
  introDescription: (
    <span className=" italic">
      I worked at <a>Beauty By Tolu</a>, where I help build and maintain our web application for our hair booking web app.
    </span>
  ),
  from: "2023",
  to: "2024",
};

export const hypercho: Job = {
  company: "Hypercho",
  position: "Full-stack Developer - Team Lead",
  introDescription: (
    <span className=" italic">
      I joined the <a>Hypercho</a> lead a team to building an interactive video online streaming platform.
    </span>
  ),
  from: "2022",
  to: "2023",
};

export const osl: Job = {
  company: "OSL",
  position: "Full-stack Developer",
  introDescription: (
    <span className=" italic">
      I joined the <a>Hypercho</a> lead a team to building an interactive video online streaming platform.
    </span>
  ),
  from: "2021",
  to: "2022",
};

export const freelance: Job = {
  company: "Freelance",
  position: "Frontend Developer",
  introDescription: (
    <span className=" italic">
      I work freelance as a fullstack creative developer on platforms like <a>upwork</a> and <a>fiverr</a>.
    </span>
  ),
  from: "2019",
  to: "Present",
};
