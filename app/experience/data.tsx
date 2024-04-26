export type Job = {
  company: string;
  position: string;
  introDescription: React.ReactNode;
  description?: React.ReactNode;
  from: string;
  to: string;
};

export const bbt: Job = {
  company: "Beauty By Tolu",
  position: "Full-stack Developer (contract)",
  introDescription: (
    <span className=" italic">
      I currently work at <a>Beauty By Tolu</a>, where I help build and maintain our web application for our hair booking web app.
    </span>
  ),
  from: "2023",
  to: "2023",
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
      I worked freelance as a frontend developer on sites like <a>upwork</a> and <a>fiverr</a>.
    </span>
  ),
  from: "2019",
  to: "2021",
};
