import React from 'react'
import { skills } from '../data/resumeData'
import SkillsStyled from '../styles/SkillsStyled'

function Skills() {
  return (
    <SkillsStyled>
        <h2>SKILLS</h2>
        <div className = 'bg-overlay'>
            <div className = 'skills-container'>
                <div className = 'skills-1'>
                {
                    skills.map(skill => {
                        return(
                            <div className = 'individual-skill'>
                                {skill.id % 2 === 0 ? 
                                <p className = {"skill skills-" + skill.id}>
                                <img 
                                    src={skill.icon} 
                                    alt={skill.name} 
                                    class = {"icon icon-" + skill.name}
                                 />
                                {skill.name}
                                </p>: null}
                            </div>
                        )
                    })
                }
                </div>
                <div className="skills-2">
                {
                    skills.map(skill => {
                        return(
                            skill.id % 2 !== 0 ? <p className = {"skill skills-" + skill.id}>
                            <img 
                            src={skill.icon} 
                            alt={skill.name} 
                            class = {"icon icon-" + skill.name}
                            />
                            {skill.name}</p>: null
                        )
                    })
                }
                </div>
            </div>
        </div>
        
    </SkillsStyled>
  )
}

export default Skills