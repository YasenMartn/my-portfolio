import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { myProjects } from '../data';

const projects = () => {
  return (
    <div>
      <Head>
        <title>Projects</title>
        <meta name="description" content="My works" />
        <link rel="icon" href="/favicon.ico" />
        
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8520107381438109"
     crossOrigin="anonymous"></script>
      </Head>
      <div className='projectsContainer'>
        <h1 className='title'>My Projects</h1>
        <div className="myProjectsContainer">
          {myProjects.map(project => (
            <div key={project.id} className="projectContainer">
              <a className="imgContainer" href={project.link} target="_blank"  rel="noreferrer" >
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
    </div>
  )
}

export default projects