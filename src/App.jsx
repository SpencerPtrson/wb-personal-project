import MainNav from './components/MainNav.jsx';
import { Outlet } from 'react-router-dom';
import LoginForm from './components/LoginForm.jsx';


export default function App() {
  return (
    <>
      <MainNav/>
      <hr />
      
      <main>
        <Outlet />
      </main>
    </>
  );
}
