import MainNav from '../components/MainNav';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestEmail } from '../reducers/userReducer';
import LoginForm from '../components/LoginForm'

import { Outlet } from 'react-router-dom';
export default function IndexPage() {
  const email = useSelector(state => state.user.email);
  
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(requestEmail);
  // }, [])


  return (
      <>
        <MainNav />
        {email === '' ? 'No email set' : email}
        <h1>Pokemon Team Builder App</h1>
        <p>Welcome!</p>
        <Outlet />
      </>
    );
  }
  