import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import CreateAccountForm from '../components/AccountManagement/CreateAccountForm';

export default function CreateAccountPage({createAccount}) {
  const navigate = useNavigate();

  return (
    <>
      <h1>Create Account</h1>
      <CreateAccountForm onCreateAccount={createAccount} />
    </>
  );
}
