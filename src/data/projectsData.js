
//!--Importing Images --//

import stewartFastenerHome from '../images/stewart-fastener.webp';
import apexTobaccoHome from '../images/apex-tobacco-home.webp';
import appTracker from '../images/app-tracker.webp';


export const projectData = [
    {
        id: 1,
        title: 'Stewart Fasteners',
        description: 'Stewart Fasteners is a full stack website built using ReactJS. This website was built to increase traffic to their brand of fasteners as well as give them a voice online.',
        imageSrc: stewartFastenerHome,
        technologies: ['ReactJS', 'VSCode', 'Git', 'API', 'NODE', 'JavaScript'],
        githubLink: 'https://github.com/GeoffKellyNC/stewart-fastener-site',
    },
    {
        id: 2,
        title: 'Apex Tobacco',
        description: 'Apex Tobacco is a full stack web site that is built using reactJS. This site was built to give the user a better experience when browsing their products and to bring more traffic into their stores.',
        imageSrc: apexTobaccoHome,
        technologies: ['ReactJS', 'VSCode', 'Git', 'NODE', 'JavaScript'],
        githubLink: 'https://github.com/GeoffKellyNC/apex-tobacco',
    },
    {
        id: 3,
        title: 'App Tracker',
        description: 'App Tracker is a full stack application that allows users to create, edit, and delete job applications. Applications are shown on front page with color coding set based on their current status. User can track their job application stats as well via the stats page.',
        imageSrc: appTracker,
        technologies: ['ReactJS', 'VSCode', 'Git', 'Cypress', 'NODE', 'JavaScript'],
        githubLink: 'https://github.com/GeoffKellyNC/job-tracker-app'
    }
];