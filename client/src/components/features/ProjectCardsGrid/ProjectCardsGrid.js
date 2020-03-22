import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ProjectCard from '../ProjectCard/ProjectCard';
import ProjectOptions from '../ProjectOptions/ProjectOptions';
import projectsDb from '../../../data/projects.json';

const ProjectCardsGrid = props => {
  const [sortBy, setSortBy] = useState({
    name: '',
    techstack: [],
    deployed: false,
  });

  const filteredProjects = () => {
    let filtered = [...projectsDb];
    /* filter by name */
    const name = new RegExp(sortBy.name, 'i');
    filtered = filtered.filter(item => name.test(item.name));
    /* filter by tech */
    if (sortBy.techstack.length) {
      filtered = filtered.filter(item => {
        for (const tech of sortBy.techstack) {
          if (item.techstack.includes(tech)) {
            return item;
          }
        }
      });
    }
    /* filter by tech */
    filtered = sortBy.deployed
      ? filtered.filter(item => item.deploylink)
      : filtered;

    return filtered;
  };

  return (
    <Container fluid="lg">
      <Row>
        <ProjectOptions filters={sortBy} setFilters={setSortBy} />
        {filteredProjects().map(project => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </Row>
    </Container>
  );
};

export default ProjectCardsGrid;
