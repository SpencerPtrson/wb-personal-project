import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function DeleteTeamButton({ teamId }) {
    const navigate = useNavigate();

    const handleDeleteTeam = async () => {
        console.log("Attempting to Delete Team")

        const verified = confirm("Are you sure you want to delete this team? It can't be recovered if you do!");
        if (verified) {
            const res = await axios.delete('/api/teams/delete', { data: { teamId: teamId }});
            if (res.data.success) {
                console.log("Succeeded in Deleting Team");
                navigate(0);
            }
            else {
                console.log(res.data);
                console.log("Failed Delete Team");
            }
        }
    }
    
    return (
        <>
            <Button onClick={handleDeleteTeam}>Delete Team</Button>
        </>
    );
}