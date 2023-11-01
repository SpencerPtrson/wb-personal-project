import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestEmail } from '../reducers/userReducer';
import { Outlet } from 'react-router-dom';
import LoginButton from '../components/AccountManagement/LoginButton';
import CreateAccountButton from "../components/AccountManagement/CreateAccountButton";
export default function IndexPage() {
  const email = useSelector(state => state.user.email);
  
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(requestEmail);
  // }, [])


  return (
      <>
        {email === '' || ! email ? <>
          <LoginButton />
          <CreateAccountButton />
        </>

          : email
        }

      </>
    );
  }
  