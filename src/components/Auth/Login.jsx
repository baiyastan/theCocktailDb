import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({ email: "", password: "" });

  return (
    <Card style={{ width: "20rem", margin: "0 auto", marginTop: "50px" }}>
      <Card.Body>
        <Card.Title>Login</Card.Title>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" />
          </Form.Group>
          <Button variant="primary">Log in</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Login;
