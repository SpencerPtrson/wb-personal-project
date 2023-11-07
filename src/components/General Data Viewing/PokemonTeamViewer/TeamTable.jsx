import TeamRow from './TeamRow';

export default function TeamTable({ teamList }) {
    const teamRows = teamList.map((team) => {
        return <TeamRow key={species.speciesId} team={team} 
    />});

    return (
      <table>
        <tbody>
          {teamRows}
        </tbody>
      </table>
    );
  }