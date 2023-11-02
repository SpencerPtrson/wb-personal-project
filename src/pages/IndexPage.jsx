import { useSelector } from "react-redux";
import LoginButton from '../components/AccountManagement/LoginButton';
import CreateAccountButton from "../components/AccountManagement/CreateAccountButton";
export default function IndexPage() {
  const email = useSelector(state => state.user.email);

  return (
      <>
        {email === '' || !email
          ? <>
              <LoginButton />
              <CreateAccountButton />
            </>
          : email
        }
      </>
    );
  }
  