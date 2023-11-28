import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useState } from 'react';

import LoginForm from '../../components/AccountManagement/LoginForm';
import { Col, Container, Row } from 'react-bootstrap';

export default function LoginPage() {
  const [errorMessage, setErrorMessage] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  const handleLogin = async (event, formData) => {
    console.log("Handling login");
    const res = await axios.post('/api/auth', formData);
    
    if (res.data.success) { 
      console.log("Login succeeded");
      dispatch({ type: 'SET_USERINFO', payload: {email: formData.email, userId: res.data.userId }});
      navigate('/'); 
    }
    else {
      setErrorMessage("Failed to login. Please try again!");
      console.log(res.data);
    };
  };

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <Container style={{ backgroundColor: `rgba(129, 29, 29, 0.8)`, color: 'white', border: '1px solid white' }}>
        <Row>
          <Col align='center'>
            <h1>LOGIN</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <LoginForm onLogin={handleLogin} />
          </Col>
        </Row>

        <Row>
          <Col align='center'>
            {errorMessage}
          </Col>
        </Row>
      </Container>
    </>
  );
}

