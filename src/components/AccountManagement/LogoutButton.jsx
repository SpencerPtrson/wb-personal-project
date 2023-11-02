import { Button } from "react-bootstrap";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function LogoutButton() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = async () => {
        console.log("Attempting Logout")
        const res = await axios.post('/api/logout')
        if (res.data.success) {
            console.log("Succeeded Logout");
            dispatch({ type: 'SET_EMAIL', payload: ''});
            navigate('/');
        }
        else {
            console.log(res.data);
            console.log("Failed Logout");
        }
    }

    return (
        <>
            <Button onClick={handleLogout}>Log Out</Button>
        </>
    );
}
  