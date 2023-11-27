import { Outlet } from "react-router-dom";
import MainNav from "../../components/MainNav";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";


export default function PageContent() {
  const email = useSelector(state => state.user.email)
  const dispatch = useDispatch()
 
  const userCheck = async () => {
    const { data } = await axios.get('/userCheck');
    if (data.email) {
      dispatch({
        type: "SET_USERINFO",
        payload: { email: data.email, userId: data.userId }
      });
    }
  }

  useEffect(() => {
    userCheck()
  }, []);
  
  return (
        <div className="bg-image" 
          style={{ minHeight: '100vh', 
                   backgroundImage: `url('https://www.rpgfan.com/wp-content/uploads/2020/10/Pokemon-Mystery-Dungeon-Explorers-of-Sky-Artwork-003.jpg')`,
                   backgroundRepeat: 'no-repeat',
                   backgroundSize: '100%'
        }}>
      <Container fluid style={{padding: 0}}>

        <MainNav email={email}/>
        <Outlet />


      </Container>
        </div>
    );
  }
  