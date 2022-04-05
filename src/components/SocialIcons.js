import React from 'react';
import { NavLink } from 'react-router-dom'






const SocialIcons = ({icons}) => {
    return(
        <div className = 'social-icons-container'>
            {
                icons.map(icon => {
                    return(
                        <NavLink to = {icon.link} id = {icon.id} className = {`${icon.name}-icon`}>
                            {icon.icon}
                        </NavLink>
                    )
                })
            }
        </div>
    )
}

export default SocialIcons;