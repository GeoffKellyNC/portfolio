import { v4 as uuid } from "uuid";

import apexTobaccoHome from "../images/apex-tobacco-home.webp";
import appTracker from "../images/app-tracker.webp";
import berryBot from "../images/berry-bot.png";
import blockChainApp from "../images/crypto-app.png";
//!--Importing Images --//

import stewartFastenerHome from "../images/stewart-fastener.webp";

export const projectData = [
  {
    id: uuid(),
    title: "Berry Twitch Bot",
    description:
      "Berry Bot is a full Stack Twitch Bot / API built to assist streamers make their streaming experience more streamlined. There are many features such as, a chat bot that moderates your chat, responds to users requests and commands. The ability to control ads on channel. Point tracking system for misbehaving users. Full Authentication system through twitch. Ability to start polls, see moderation stats, channel stats and more. Work in progress with many more features to come.",
    imageSrc: berryBot,
    technologies: [
      "ReactJS",
      "Redux",
      "Styled-Components",
      "Node.JS",
      "Express",
      "JWT",
      "TWITCH API",
      "TWURPLE",
      "React Router V6",
      "SQL",
      "MySQL",
      "bycrypt",
      "Axios",
      "Git",
    ],
    githubLink: "https://github.com/GeoffKellyNC",
    liveLink: "https://berrytwitchbot.netlify.app/",
  },
  {
    id: uuid(),
    title: "Blockchain Info",
    description:
      "This is an application showing the utilization of accessing data from an API and displaying that data. This data is pulled from 3 public API sources. Plans for the Application to include authentication and ability to trade, sell, and buy crypto currencies.",
    imageSrc: blockChainApp,
    technologies: [
      "ReactJS",
      "VSCode",
      "Git",
      "Cypress",
      "JavaScript",
      "Redux",
      "API",
    ],
    githubLink: "https://github.com/GeoffKellyNC/crypto-app-2.0",
    liveLink: "https://gk-cryptotracker.netlify.app/",
  },
  {
    id: uuid(),
    title: "Stewart Fasteners",
    description:
      "Stewart Fasteners is a full stack website built using ReactJS. This website was built to increase traffic to their brand of fasteners as well as give them a voice online.",
    imageSrc: stewartFastenerHome,
    technologies: ["ReactJS", "VSCode", "Git", "API", "NODE", "JavaScript"],
    githubLink: "https://github.com/GeoffKellyNC/stewart-fastener-site",
    liveLink: "https://stewart-fastener-site.vercel.app/",
  },
  {
    id: uuid(),
    title: "Apex Tobacco",
    description:
      "Apex Tobacco is a full stack web site that is built using reactJS. This site was built to give the user a better experience when browsing their products and to bring more traffic into their stores.",
    imageSrc: apexTobaccoHome,
    technologies: ["ReactJS", "VSCode", "Git", "NODE", "JavaScript"],
    githubLink: "https://github.com/GeoffKellyNC/apex-tobacco",
    liveLink: "https://apex-tobacco.vercel.app/",
  },
  {
    id: uuid(),
    title: "App Tracker",
    description:
      "App Tracker is a full stack application that allows users to create, edit, and delete job applications. Applications are shown on front page with color coding set based on their current status. User can track their job application stats as well via the stats page.",
    imageSrc: appTracker,
    technologies: [
      "ReactJS",
      "VSCode",
      "Git",
      "Cypress",
      "NODE",
      "JavaScript",
      "Redux",
      "API",
      "PostgreSQL",
    ],
    githubLink: "https://github.com/GeoffKellyNC/job-tracker-app",
    liveLink: "https://job-app-tracker-gk.netlify.app/",
  },
];
