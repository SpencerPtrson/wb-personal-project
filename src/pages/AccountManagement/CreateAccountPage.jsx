import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useState } from 'react';

import CreateAccountForm from '../../components/AccountManagement/CreateAccountForm';

export default function CreateAccountPage({createAccount}) {
  const [errorMessage, setErrorMessage] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCreateAccount = async(event, formData) => {
    console.log("Handling Create Account");
    const res = await axios.post('/api/users/create', formData);
    if (res.data.userId) { 
      console.log("Create Account succeeded");
      dispatch({ type: 'SET_EMAIL', payload: formData.email});
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
      <h1>Create Account</h1>
      <CreateAccountForm onCreateAccount={handleCreateAccount} />
      {errorMessage}
    </>
  );
}
