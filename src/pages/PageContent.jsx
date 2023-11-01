import { Outlet } from "react-router-dom";
import MainNav from "../components/MainNav";
export default function PageContent() {
  return (
      <>
        <MainNav />
        <Outlet />
      </>
    );
  }
  