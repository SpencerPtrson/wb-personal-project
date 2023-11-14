import { useSelector } from "react-redux";
export default function CreateTeamForm({ onCreateTeam }) {
  const userId = useSelector(state => state.user.userId)
    return (
      <form method='post'
        onSubmit={(e) => {
          e.preventDefault();
          onCreateTeam(e, {
            userId: userId,
            teamName: teamName.value,
          });
        }}
      >
        <div className="form-group">
          <label htmlFor="teamName">Team Name:</label>
          <input className="form-control-sm"
            name="teamName"
            id="teamName"
            type="text"
            required
          />
          <button type="submit">Create Team</button>
        </div>
      </form>
    );
  }
  