import { useSelector } from "react-redux";
import { Button, Form } from "react-bootstrap";
export default function CreateTeamForm({ onCreateTeam }) {
  const userId = useSelector(state => state.user.userId)
  
  return (
    <Form>
      <Form.Group className="mb-3" controlId='formTeamName' align='center'>
        <Form.Label>Team Name</Form.Label>
        <Form.Control type='text' placeholder='Enter Team Name' required />
        <Form.Text style={{ color: 'white'}}>Remember that your teams are public information! Please enter an appropriate name!</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="submitButton" align='center'>
        <Button variant="primary" onClick={(e) => {
          e.preventDefault();
          if (!formTeamName.value || formTeamName.value.trim() === ''){
            alert("Please enter a name for your new team!");
            return;
          }
          onCreateTeam(e, {
            userId: userId,
            teamName: formTeamName.value
          })
        }}>Create Your Team!</Button>
      </Form.Group>
    </Form>
  );
}