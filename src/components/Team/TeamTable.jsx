import TeamRow from './TeamRow';
import { useSelector } from "react-redux/es/hooks/useSelector";


export default function TeamTable({ teamList }) {
    const email = useSelector(state => state.user.email);

    console.log(teamList);

    let userHasTeams = false;
    teamList.forEach(team => {
      team.user.email === email ? userHasTeams = true : userHasTeams = false;
    })


    const teamRows = teamList.map((team) => {
      return <TeamRow key={team.teamId} team={team}/>
    });

    return (
      <table className='table teamScrollable'>
        <thead>
          <tr>
            <th>Team Name</th>
            <th>Team Creator</th>
            <th>Pokemon On Team</th>

            {
              userHasTeams
                ? <th>Update your team!</th>
                : <th></th>
            }
          </tr>
        </thead>
        <tbody>
          {teamRows}
        </tbody>
      </table>
    );
  }