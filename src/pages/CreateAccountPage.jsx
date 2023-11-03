import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";

import CreateAccountForm from '../components/AccountManagement/CreateAccountForm';

export default function CreateAccountPage({createAccount}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCreateAccount = async(event, formData) => {
    console.log("Handling Create Account");
    const res = await axios.post('/api/users/create', formData);
    console.log(formData);
    console.log(res.data);
    if (res.data.userId) { 
      console.log("Create Account succeeded");
      dispatch({ type: 'SET_EMAIL', payload: formData.email});
      console.log(formData.email);
      navigate('/'); 
    }
    else {
      console.log(res.error);
      console.log("Create Account failed");
    }
  }

  return (
    <>
      <h1>Create Account</h1>
      <CreateAccountForm onCreateAccount={handleCreateAccount} />
    </>
  );
}
