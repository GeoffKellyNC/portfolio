import React from 'react'

import EducationStyled from '../styles/EducationStyled'
import { education } from '../data/resumeData'

function Education() {
  return (
    <EducationStyled>
      <div className = 'container bg-overlay'>
        <h1>Education Section</h1>
        <div className = 'education-data' >
          {
            education.map(data => {
              return(
                <div className = 'education-item'>
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