import { Outlet } from "react-router-dom";
import MainNav from "../components/MainNav";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";


export default function PageContent() {
  const email = useSelector(state => state.user.email)
  console.log(email)
  const dispatch = useDispatch()

  const userCheck = async () => {
    const { data } = await axios.get('/userCheck')
    if (data.email) {
      dispatch({
        type: "SET_EMAIL",
        payload: data.email
      })
    }
  }

  useEffect(() => {
    userCheck()
  }, [])
  
  return (
      <>
        <MainNav />
        <Outlet />
      </>
    );
  }
  