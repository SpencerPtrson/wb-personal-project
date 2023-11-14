import { useLoaderData, useNavigate } from "react-router-dom";
import axios from 'axios'
import { useSelector } from "react-redux/es/hooks/useSelector";
import TeamTable from '../../components/General Data Viewing/PokemonTeamViewer/TeamTable';  
import CreateTeamForm from "../../components/TeamManagement/CreateTeamForm";

export default function TeamListPage() {
  const email = useSelector(state => state.user.email)
  const navigate = useNavigate();
  const { teams } = useLoaderData();

  const handleCreateTeam = async(event, formData) => {
    console.log("Handling Create Team");
    console.log("Form Data:", formData);
    const res = await axios.post('/api/teams/create/', formData);
    console.log(res.data);
    if (res.data.success) { 
      console.log("Create Team succeeded");
      navigate(0); 
    }
    else {
      setErrorMessage("Failed to create team.");
      console.log("Create Team failed");
      console.error(res.data.error);
    }
  }


  return (
    <>
      { email
        ? <>
          <div className="container mx-auto">
            <p style={{justifyContent: "center"}}>Want to submit a team? Enter a name below and then add some pokemon!</p>
            <CreateTeamForm onCreateTeam={handleCreateTeam}/>
          </div>
          <hr />
        </>
        : <></>
      }
      <TeamTable teamList={teams}/>
    </>
  );
}
