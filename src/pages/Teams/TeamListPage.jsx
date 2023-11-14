import { useLoaderData } from "react-router-dom";
import TeamTable from '../../components/General Data Viewing/PokemonTeamViewer/TeamTable';  

export default function TeamListPage() {
  const { teams } = useLoaderData();
  return (
    <>
      <h1>All Teams</h1>
      <TeamTable teamList={teams}/>
    </>
  );
}
