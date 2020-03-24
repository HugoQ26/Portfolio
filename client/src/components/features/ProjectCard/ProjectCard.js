import React, { useState } from 'react';
import { Card, Col, Modal } from 'react-bootstrap';
import './ProjectCard.style.scss';

const ProjectCard = ({ project }) => {
  const { name, githublink, deploylink, techstack, description, img } = project;
  const [show, setShow] = useState(false);
  return (
    <Col xs={12} sm={6} lg={4} className="section--card">
      <Card>
        <Card.Header as="h5">{name}</Card.Header>
        {img && (
          <Card.Img
            variant="top"
            src={`/images/pages/${img}`}
            className="screenshot"
            onClick={() => setShow(true)}
          />
        )}
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">Description</Card.Subtitle>
          <Card.Text>{description}</Card.Text>
          {githublink && (
            <Card.Link href={githublink} target="_blank">
              <img src="/images/GitHub.png" alt="Github logo link" />
            </Card.Link>
          )}
          {deploylink && (
            <Card.Link href={deploylink} target="_blank">
              <img src="/images/heroku.png" alt="Heroku logo link" />
            </Card.Link>
          )}
        </Card.Body>
        <Card.Footer>
          {techstack.map(tech => (
            <img src={`/images/${tech}.png`} alt={`${tech} logo`} key={tech} />
          ))}
        </Card.Footer>
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title as="h5">{name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={`/images/pages/${img}`}
              className="screenshot--modal"
              onClick={() => setShow(true)}
            />
          </Modal.Body>
        </Modal>
      </Card>
    </Col>
  );
};

export default ProjectCard;

{
  /* <a href="https://iconscout.com/icons/node-js" target="_blank">Node Js Icon</a> by <a href="https://iconscout.com/contributors/icon-mafia" target="_blank">Icon Mafia</a> */
}
