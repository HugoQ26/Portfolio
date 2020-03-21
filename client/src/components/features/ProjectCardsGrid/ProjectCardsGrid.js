import React from 'react';
import { Container, Row, CardColumns } from 'react-bootstrap';
import ProjectCard from '../ProjectCard/ProjectCard';
import projectsDb from '../../../data/projects.json';

const ProjectCardsGrid = props => {
  return (
    <Container fluid="lg">
      <Row>
        {projectsDb.map(project => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </Row>
    </Container>
  );
};

export default ProjectCardsGrid;
