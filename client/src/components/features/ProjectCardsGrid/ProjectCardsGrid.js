import React from 'react';
import { Container, Row, CardDeck } from 'react-bootstrap';
import ProjectCard from '../ProjectCard/ProjectCard';
import projectsDb from '../../../data/projects.json';

const ProjectCardsGrid = props => {
  return (
    <Container>
      <Row>
        <CardDeck>
          {projectsDb.map(project => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </CardDeck>
      </Row>
    </Container>
  );
};

export default ProjectCardsGrid;
