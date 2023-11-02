import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";

import CreateAccountForm from '../components/AccountManagement/CreateAccountForm';

export default function CreateAccountPage({createAccount}) {
  const navigate = useNavigate();

  const handleCreateAccount = async() => {
    console.log("Handling Create Account");
    const res = await axios.post('/api/users/create', formData);
    
    if (res.data.success) { 
      console.log("Create Account succeeded");
      dispatch({ type: 'SET_EMAIL', payload: formData.email});
      console.log(formData.email);
      navigate('/'); 
    }
    else console.log("Create Account failed");
  }

  return (
    <>
      <h1>Create Account</h1>
      <CreateAccountForm onCreateAccount={createAccount} />
    </>
  );
}
