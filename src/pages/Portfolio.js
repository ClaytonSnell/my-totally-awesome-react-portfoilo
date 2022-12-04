import React, { useState } from 'react';
import Project from "./Project";

function Portfolio() {

  const [projects] = useState([
    {
      name: 'carpe-diem-scheduler',
      description: 'Javascript/CSS/HTML',
      link: "https://claytonsnell.github.io/carpe-diem-scheduler/",
      repo: "https://github.com/ClaytonSnell/carpe-diem-scheduler"
    },
    {
      name: 'the-fate-book',
      description: 'MERN Stack',
      link: "https://claytonsnell.github.io/the-fate-book/",
      repo: "https://github.com/ClaytonSnell/the-fate-book"
    },
    {
      name: 'cool-weather-api',
      description: 'HTML/CSS',
      link: "https://claytonsnell.github.io/cool-weather-api/",
      repo: "https://github.com/ClaytonSnell/cool-weather-api"
    },
    {
      name: 'B&B',
      description: 'MERN restructring',
      link: "https://beans-and-brew.herokuapp.com/",
      repo: "https://github.com/j-art-fox/Project-3-Beans-and-Brews"
    },
    {
      name: 'progressive-web-app-text-editor',
      description: 'PWA',
      // . NEEDS LINK STILL
      link: "https://github.com",
      repo: "https://github.com/ClaytonSnell/progressive-web-app-text-editor"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
