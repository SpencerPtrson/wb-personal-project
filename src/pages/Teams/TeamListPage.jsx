import { useLoaderData } from "react-router-dom";
import TeamTable from '../../components/General Data Viewing/PokemonTeamViewer/TeamTable';  

export default function TeamListPage() {
  const { teams } = useLoaderData();

  console.log(teams);
  return (
    <>
      <h1>Team List Page</h1>
      <TeamTable teamList={teams}/>
    </>
  );
}
