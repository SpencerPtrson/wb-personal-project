import TeamRow from './TeamRow';

export default function TeamTable({ teamList }) {
    const teamRows = teamList.map((team) => {
        return <TeamRow key={team.teamId} team={team} />
      });

    return (
      <table className='table'>
        <thead>
          <tr>
            <th>Team Name</th>
            <th>Team Creator</th>
            <th>Pokemon On Team</th>
          </tr>
        </thead>
        <tbody>
          {teamRows}
        </tbody>
      </table>
    );
  }