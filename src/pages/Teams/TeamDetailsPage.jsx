import { useLoaderData } from 'react-router-dom';

export default function TeamDetailsPage() {
  let { team } = useLoaderData();
  console.log(team);

  return (
    <>
    <h1>This is a team's Detail Page!</h1>
      <h1>{team.teamName}</h1>
    </>
  );
}
