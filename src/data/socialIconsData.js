import { v4 as uuid } from 'uuid';

//!-- Importing React Icons Components --//
import { FaGithubAlt, FaTwitter } from 'react-icons/fa'; //! Github Icon / Twitter Icon
import { AiOutlineLinkedin } from 'react-icons/ai'; //! Linkedin Icon
import { ImInstagram } from 'react-icons/im'; //! Instagram Icon
import { MdEmail } from 'react-icons/md'; //! Email Icon




//? Icons to get, Github, LinkedIn, Twitter, Instagram, Other


export const socialIcons = [
    {
        id: uuid(),
        name: 'Github',
        icon: <FaGithubAlt />,
        link: 'https://github.com/GeoffKellyNC'
    },
    {
        id: uuid(),
        name: 'LinkedIn',
        icon: <AiOutlineLinkedin />,
        link: 'https://www.linkedin.com'
    },
    {
        id: uuid(),
        name: 'Twitter',
        icon: <FaTwitter />,
        link: 'https://twitter.com'
    },
    {
        id: uuid(),
        name: 'Instagram',
        icon: <ImInstagram />,
        link: 'https://www.instagram.com'
    },
    {
        id: uuid(),
        name: 'Email',
        icon: <MdEmail />,
        link: '#'
    }
]