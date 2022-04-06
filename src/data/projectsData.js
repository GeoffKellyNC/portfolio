import { v4 as uuid } from 'uuid';

import stewartFastenerHome from '../images/stewart-fastener.webp';


export const projectData = [
    {
        id: uuid(),
        title: 'Stewart Fasteners',
        description: 'Stewart Fasteners is a full stack application that allows users to create, edit, and delete fasteners. Users can also view fasteners that have been created by other users.',
        imageSrc: stewartFastenerHome,
        technologies: ['ReactJS', 'VSCode', 'Git', 'API', 'NODE', 'JavaScript'],
        githubLink: 'https://github.com/GeoffKellyNC/stewart-fastener-site',
    }
];