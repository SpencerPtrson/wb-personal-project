import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function DeleteAccountButton() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userId = useSelector(state => state.user.userId);

    const handleDeleteAccount = async () => {
        console.log("Attempting to Delete Account")

        const verified = confirm("Are you sure you want to delete this account? It can't be recovered if you do!");
        if (verified) {
            const res = await axios.delete('/api/users/delete', { data: { userId: userId }});
            if (res.data.success) {
                console.log("Succeeded Delete Account");
                dispatch({ type: 'SET_USERINFO', payload: {email: null, userId: null}});
                navigate('/');
            }
            else {
                console.log(res.data);
                console.log("Failed Delete");
            }
        }
    }
    
    return (
        <>
            <Button onClick={handleDeleteAccount}>Delete My Account</Button>
        </>
    );
}