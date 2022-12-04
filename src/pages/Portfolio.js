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
      name: 'pastel-puzzels',
      description: 'MERN Stack',
      link: "https://claytonsnell.github.io/carpe-diem-scheduler/",
      repo: "https://github.com/ClaytonSnell/carpe-diem-scheduler"
    },
    {
      name: 'run-buddy',
      description: 'HTML/CSS',
      link: "https://github.com",
      repo: "https://github.com"
    },
    {
      name: 'led-wall',
      description: 'Node/IoT',
      link: "https://github.com",
      repo: "https://github.com"
    },
    {
      name: 'calculator',
      description: 'React/JavaScript/CSS',
      link: "https://github.com",
      repo: "https://github.com"
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
