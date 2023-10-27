import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import LoginForm from '../components/LoginForm';

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = async (event, formData) => {
    event.preventDefault();
    console.log("Handling login");
    const res = await axios.post('/api/auth', formData);

    if (res.data.success) {
      navigate('/me');
    }
  };

  return (
    <>
      <h1>Log In</h1>
      <LoginForm onLogin={handleLogin} />
    </>
  );
}
