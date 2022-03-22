import React from 'react'

import EducationStyled from '../styles/EducationStyled'
import { education } from '../data/resumeData'
import { MdSchool } from 'react-icons/md'

function Education() {
  return (
    <EducationStyled>
      <div className = 'container bg-overlay'>
        <h1>Education</h1>
        <div className = 'education-data' >
          {
            education.map(data => {
              return(
                <div className = 'education-item'>
                  <MdSchool className = 'edu-icon' size = {30}/>
                  <p className = 'school'>{data.school}</p>
                  <p className = 'city'>{data.city}</p>
                  <p className = 'degree'>{data.degree}</p>
                  <p className = 'date'>{data.date}</p>
                </div>
              )
            })
          }
        </div>

      </div>
        

    </EducationStyled>
  )
}

export default Education