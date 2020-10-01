import React from 'react';
import { Button, Col, Container, Form } from 'react-bootstrap';

const SignupPage = () => (
  <Container>
    <Form>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Name</Form.Label>
          <Form.Control type="input" placeholder="Enter Your Name" />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="input" placeholder="Enter Your Last Name" />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter Your Email" />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Birth Date</Form.Label>
          <Form.Control type="date" placeholder="dd/mm/YYYY" format="dd/mm/YYYY" />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Repeat Password</Form.Label>
          <Form.Control type="password" placeholder="Repeat Your Password" />
        </Form.Group>
      </Form.Row>

      <Button type="submit">Submit</Button>
    </Form>
  </Container>
);

export default SignupPage;
