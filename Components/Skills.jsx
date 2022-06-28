import Image from 'next/image';
import React from 'react';
import { skills } from '../data';

const Skills = () => {
  return (
      <div className="skillsContainer" id="skillsz">
        <h1>Skills</h1>
        <div className="skills">
          {skills.map(skill =>(
            <div className="skillContainer" key={skill.id} data-aos="fade-up">
              <div className="tooltiptext">{skill.name}</div>
              <Image src={`/pictures/technologies/${skill.image}`} alt={skill.name} width="60%" height="60%"/>
            </div>
          ))}
        </div>
      </div>
  )
}

export default Skills