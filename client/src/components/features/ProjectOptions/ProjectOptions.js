import React from 'react';
import { Col, Form, Accordion, Button } from 'react-bootstrap';
import './ProjectOptions.style.scss';
import techStacks from '../../../data/techstacks';

const ProjectOptions = ({ filters, setFilters }) => {
  const { name, techstack, deployed } = filters;

  const handleChange = ({ target }) => {
    const techArr = techstack =>
      target.checked
        ? [...techstack, target.id]
        : techstack.filter(tech => tech !== target.id);

    setFilters({
      name: target.name === 'title' ? target.value : name,
      techstack: target.name === 'tech' ? techArr(techstack) : [...techstack],
      deployed: target.name === 'deploy' && target.checked,
    });
  };

  return (
    <Col lg={12} className="form--group">
      <Accordion>
        <Accordion.Toggle
          as={Button}
          block
          variant="outline-primary"
          eventKey="0"
        >
          Sort options
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Form>
            <Form.Row>
              <Col xs={12} sm={6} lg={4} className="input--group">
                <Form.Label>Project name</Form.Label>
                <Form.Control
                  onChange={e => handleChange(e)}
                  value={name}
                  type="text"
                  placeholder="Enter part of project name"
                  name="title"
                />
              </Col>
              <Col xs={12} sm={6} lg={4} className="input--group">
                <Form.Label>Tech used:</Form.Label>
                <div>
                  {techStacks.map(tech => (
                    <Form.Check
                      inline
                      onChange={e => handleChange(e)}
                      type="checkbox"
                      label={tech}
                      name="tech"
                      id={tech}
                      key={tech}
                    />
                  ))}
                </div>
              </Col>
              <Col xs={12} sm={6} lg={4} className="input--group">
                <Form.Label>Project deployed:</Form.Label>
                <Form.Check
                  onChange={e => handleChange(e)}
                  type="switch"
                  id="check4"
                  label="Deployed"
                  name="deploy"
                />
              </Col>
            </Form.Row>
          </Form>
        </Accordion.Collapse>
      </Accordion>
    </Col>
  );
};

export default ProjectOptions;
