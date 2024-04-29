import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [user, setUser] = useState({ email: "", password: "" });

  const handler = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  async function singUp() {
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );

      toast.success("email success created");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  const isDisabled = user.email === "" || user.password === "";

  return (
    <Card style={{ width: "20rem", margin: "0 auto", marginTop: "50px" }}>
      <Card.Body>
        <Card.Title>Login</Card.Title>
        <ToastContainer />
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={user.email}
              onChange={handler}
              name="email"
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={user.password}
              onChange={handler}
              name="password"
              type="password"
              placeholder="Enter password"
            />
          </Form.Group>

          <Button
            disabled={isDisabled}
            onClick={() => singUp()}
            variant="primary"
          >
            Sign Up
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Register;
