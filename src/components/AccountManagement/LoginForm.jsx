import { Form, Button } from "react-bootstrap";

export default function LoginForm({ onLogin }) {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formEmail" align='center' >
        <Form.Label>Email Address</Form.Label>
        <Form.Control type='email' placeholder="Enter Email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId='formPassword' align='center'>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="submitButton" align='center'>
        <Button variant='primary'  onClick={(e) => {
          e.preventDefault();
          onLogin(e, {
            email: formEmail.value,
            password: formPassword.value
          });
        }}>Create an Account!</Button>
      </Form.Group>
    </Form>
  );
}