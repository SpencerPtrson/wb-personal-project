import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useEffect } from 'react';

import LoginForm from '../components/AccountManagement/LoginForm';

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (event, formData) => {
    event.preventDefault();
    console.log("Handling login");
    console.log(formData);
    const res = await axios.post('/api/auth', formData);
    console.log(formData.email);

    if (res.data.success) { 
      console.log("Login succeeded");
      dispatch({ type: 'SET_EMAIL', payload: formData.email});

      navigate('/'); 
    }
    // else console.log("Login failed");
  };

  return (
    <>
      <h1>Log In</h1>
      <LoginForm onLogin={handleLogin} />
    </>
  );
}
