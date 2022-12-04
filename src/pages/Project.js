import React from 'react';
import { removeHyphensAndCapitalize } from '../utils/helpers';

function Project({ project }) {

  const { name, repo, link, description } = project;

  return (
    <div className="project" key={name}>
      <img
      // need to change routes that match to pictures and use the same name as followed by jpg is in the portfolio folder
      // *****8
        // src={require(`../assets/projects/${name}.jpg`).default}
        alt={removeHyphensAndCapitalize(name)}
        className="project-bg"
      />
      <div className="project-text">
        <h3>
          <a href={link}>{removeHyphensAndCapitalize(name)}</a>{' '}
          <a href={repo}>
            <i className="fab fa-github"></i>
          </a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Project;
