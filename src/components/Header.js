import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';

const HeaderComponent = () => (
  <>
    <Container>
      <Row><Col>
        <Nav activeKey="/home" className="justify-content-end">
          <Nav.Item>
            <Nav.Link eventKey="link-1">Login</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Logout</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3">Sign Up</Nav.Link>
          </Nav.Item>
        </Nav>
      </Col></Row>
    </Container>
  </>
);

export default HeaderComponent;
