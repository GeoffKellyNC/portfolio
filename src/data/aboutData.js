import { v4 as uuid } from 'uuid';

export const cardData = [
    {
        id: uuid(),
        title: 'About',
        text: 'I am a full stack web developer with a passion for creating beautiful and functional websites.I am a full stack web developer.',
        button: 'Read More',
        className: 'card-container card-1',
        moreInfo: 
            {
                id: uuid(),
                text: 'About Text'
            }
    },
    {
        id: uuid(),
        title: 'Technology',
        text: 'I am a full stack web developer with a passion for creating beautiful and functional websites.I am a full stack web developer.',
        button: 'Read More',
        className: 'card-container card-2',
        moreInfo: 
            {
                id: uuid(),
                text: 'Technology Text'
            }
    },
    {
        id: uuid(),
        title: 'Interests',
        text: 'I am a full stack web developer with a passion for creating beautiful and functional websites.I am a full stack web developer.',
        button: 'Read More',
        className: 'card-container card-3',
        moreInfo:
            {
                id: uuid(),
                text: 'Interests Text'
            }
    }
]