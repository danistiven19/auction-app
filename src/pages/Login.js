import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap'

 const LoginPage = () => (
     <>
    <Container>
     <Row><Col className="text-center">
        <h1>Login</h1>
     </Col></Row>
     <Row><Col>
        <Form>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Please enter your email" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button type="submit">
                Login
            </Button> <br />
            {/* eslint-disable-next-line */}
            <a href="#">Don't a member? Register here</a>
        </Form>
        </Col></Row>
    </Container>
     </>
 );

 export default LoginPage;
