import React from "react";
import { Form, Button, Card } from "react-bootstrap";

function Register() {
  return (
    <Card style={{ width: "20rem", margin: "0 auto", marginTop: "50px" }}>
      <Card.Body>
        <Card.Title>Login</Card.Title>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" />
          </Form.Group>

          <Button variant="primary">Sign Up</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Register;
