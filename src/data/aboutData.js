import { v4 as uuid } from 'uuid';

export const cardData = [
    {
        id: uuid(),
        title: 'About',
        text: 'I am a full stack web developer with a passion for creating beautiful and functional websites.I am a full stack web developer.',
        button: 'Learn More',
        className: 'card-container card-1',
        moreInfo: 
            {
                id: uuid(),
                text: 'Looks Like you found something thats a work in progress. I am working on it. Please check back soon.  ',
            }
    },
    {
        id: uuid(),
        title: 'Technology',
        text: 'I have experience working with a few different technologies in my development journey. I enjoy learning new technologies and am always looking to improve my skills.',
        button: 'See My Skills',
        className: 'card-container card-2',
        moreInfo: 
            {
                id: uuid(),
                text: 'Looks Like you found something thats a work in progress. I am working on it. Please check back soon. '
            }
    },
    {
        id: uuid(),
        title: 'Interests',
        text: 'Outside of technology I have a genuine passion for helping people around me. I also enjoy robotics, 3D printing, and video games.',
        button: 'Read More',
        className: 'card-container card-3',
        moreInfo:
            {
                id: uuid(),
                text: 'Looks Like you found something thats a work in progress. I am working on it. Please check back soon. '
            }
    }
]