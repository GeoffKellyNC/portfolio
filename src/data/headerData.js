import { v4 as uuid } from 'uuid';

export const navData = [
    {   
        id: uuid(),
        name: 'PROJECTS',
        to: '/',
        className: 'nav-link nav-projects',
        num: '01'
    },
    {   id: uuid(),
        name: 'ABOUT',
        to: '/',
        className: 'nav-link nav-about',
        num: '02'
    },
    {   
        id: uuid(),
        name: 'CONTACT',
        to: '/',
        className: 'nav-link nav-contact',
        num: '03'
    },
    {   
        id: uuid(),
        name: 'RESUME',
        to: './geoff-kelly-2022.pdf',
        className: 'nav-link nav-about',
        num: '04'
    }

    // {
    //     id: 5,
    //     name: 'GITHUB',
    //     to: '/Github',
    //     className: 'nav-github'
    // }
]