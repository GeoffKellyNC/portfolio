import React from 'react'

import { resume } from '../data/resumeData'


import ResumeStyled from '../styles/ResumeStyled'
import { GoRocket } from "react-icons/go";



function Resume() {


  return (
    <ResumeStyled>
        <h3> RESUME </h3>

        <h1 className="work-experience-heading">Work Experience</h1>

    {
        resume.map(data =>{
            return(
                <>
                <div className = 'resume-item'>
                    <div className = 'resume-icon'>{data.icon}</div>
                    <div className = 'resume-title title'>{data.title}</div>
                    <div className = 'resume-company title'>{data.company} - {data.location.city}, {data.location.state}</div>
                    <div className = 'resume-date title'>{data.startDate} - {data.endDate}</div>
                    <div className = 'desc-container'>
                        {
                            data.description.map((desc,index) => {
                                return(
                                    <div className = 'resume-desc-item'>
                                        <GoRocket className = 'rocket' />
                                        <p key = {index} className ={"desc desc-" + index }>
                                        {desc}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                </>
            )
        })
    }
    </ResumeStyled>
  )
}

export default Resume