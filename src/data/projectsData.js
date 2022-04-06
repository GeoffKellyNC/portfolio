import { v4 as uuid } from 'uuid';

//!--Importing Images --//

import stewartFastenerHome from '../images/stewart-fastener.webp';
import apexTobaccoHome from '../images/apex-tobacco-home.webp';


export const projectData = [
    {
        id: uuid(),
        title: 'Stewart Fasteners',
        description: 'Stewart Fasteners is a full stack application that allows users to create, edit, and delete fasteners. Users can also view fasteners that have been created by other users.',
        imageSrc: stewartFastenerHome,
        technologies: ['ReactJS', 'VSCode', 'Git', 'API', 'NODE', 'JavaScript'],
        githubLink: 'https://github.com/GeoffKellyNC/stewart-fastener-site',
    },
    {
        id: uuid(),
        title: 'Apex Tobacco',
        description: 'Apex Tobacco is a full stack application that allows users to create, edit, and delete tobacco products. Users can also view tobacco products that have been created by other users.',
        imageSrc: apexTobaccoHome,
        technologies: ['ReactJS', 'VSCode', 'Git', 'API', 'NODE', 'JavaScript'],
        githubLink: 'https://github.com/GeoffKellyNC/apex-tobacco',
    }
];