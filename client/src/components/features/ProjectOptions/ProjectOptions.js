import React from 'react';
import { Col, Form } from 'react-bootstrap';
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
    <Col lg={12}>
      <Form>
        <Form.Row>
          <Col xs={12} sm={6} lg={4}>
            <Form.Label>Project name</Form.Label>
            <Form.Control
              onChange={e => handleChange(e)}
              value={name}
              type="text"
              placeholder="Enter part of project name"
              name="title"
            />
          </Col>
          <Col xs={12} sm={6} lg={4}>
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
          <Col xs={12} sm={6} lg={4}>
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
    </Col>
  );
};

export default ProjectOptions;
