import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useState } from 'react';

import CreateAccountForm from '../../components/AccountManagement/CreateAccountForm';
import { Container, Row, Col } from 'react-bootstrap';

export default function CreateAccountPage({createAccount}) {
  const [errorMessage, setErrorMessage] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCreateAccount = async(event, formData) => {
    console.log("Handling Create Account");
    const res = await axios.post('/api/users/create', formData);
    if (res.data.userId) { 
      console.log("Create Account succeeded");
      dispatch({ type: 'SET_USERINFO', payload: {email: formData.email, userId: res.data.userId}});
      navigate('/'); 
    }
    else {
      setErrorMessage("Failed to create account. Please try a different email.");
      console.log("Create Account failed");
      console.error(res.data.error);
    }
  }

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <Container style={{ backgroundColor: `rgba(129, 29, 29, 0.8)`, color: 'white' }}>
        <Row>
          <Col align="center">
            <h1>Create Account</h1>
          </Col>
        </Row>
        <CreateAccountForm onCreateAccount={handleCreateAccount} />
        {errorMessage}
      </Container>
    </>
  );
}
