import Image from 'next/image';
import React from 'react';
import { myProjects } from '../data';

const Projects = () => {
  return (
    <div className='projectsContainer' id="projects">
      <h1 className='title'>My Projects</h1>
      <div className="myProjectsContainer">
        {myProjects.map(project => (
          <div key={project.id} className="projectContainer" data-aos="fade-up">
            <a className="imgContainer" href={project.link} target="_blank" rel="noreferrer" >
              <Image src={`/pictures/websites/${project.image}`} layout="fill" objectFit='contain' alt="picture" />
            </a>
            <div className="infoContainer">
              <h2 className="title">{project.name}</h2>
              <span className="info">Built by: {project.info}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects