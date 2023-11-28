import { Form, Button } from "react-bootstrap";

export default function CreateAccountForm({ onCreateAccount }) {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formEmail" align='center' required >
        <Form.Label>Email Address</Form.Label>
        <Form.Control type='email' placeholder="Enter Email"/>
        <Form.Text style={{color: 'white'}}>We don't sell data. Your email is safe with us!</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId='formPassword' align='center'>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="submitButton" align='center'>
        <Button variant='primary' onClick={(e) => {
          e.preventDefault();

          if(!formEmail.value || formEmail.value.trim() === '' || !formPassword.value || formPassword.value.trim() ==='') {
            alert("Please enter valid data into the fields!");
            return;
          }
          onCreateAccount(e, {
            email: formEmail.value,
            password: formPassword.value
          });
        }}>Create an Account!</Button>
      </Form.Group>
    </Form>     
  );
}