import React from 'react';
import { Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectCardsGrid from './components/features/ProjectCardsGrid/ProjectCardsGrid';

function App() {
  return (
    <Container fluid="sm" className="App">
      <ProjectCardsGrid />
    </Container>
  );
}

export default App;
