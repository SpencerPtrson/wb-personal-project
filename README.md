This project is a pokemon team builder where users can create their own teams / sets and view other's sets / teams.
To prevent the need for constant calls to PokeAPI, data is seeded from PokeAPI into a local database and used for queries

Functionality:
- Create Users with unique emails

- Users can create teams with up to 6 pokemon, and delete their own teams.

- Users can view lists of Pokemon Species, Moves, and all sets created by other users, and all teams created by other users.

- Clicking on a pokemon species' name on the all-pokemon species page takes you to a pokemon species details page where you can see a pokemon's base stats, available abilities, available moves, and typings. Additionally, there's navigation between species pages by clicking either "previous species" or "next species" in the top left and top right of the page.

- The All Pokemon Moves page displays all currently available moves, and details their name, type, power, move class, and flavor text.

- The All Pokemon Sets page shows each pokemon instance created by a user. It lists the team name, the set creator's email, the pokemon's ability and nature, the selected IVs and EVs, as well as the chosen moves. 
    - If the user is logged in, they can see links next to their sets that will allow them to either delete or edit that team member.
    - Clicking on the team name will take you to a team-details page where it shows every pokemon that is on the selected team.

- The All Teams page shows every (not-empty) team created by every user. It lists the team name, the team creator, and the pokemon on that team.
    - If the user is logged in, they're capable of adding a pokemon to their team from this page or deleting the team outright. They also have the capability of creating a new team from this page.
    By clicking on a team name, they'll be taken to the TeamDetails page.


- The My Teams page displays all teams created by the currently logged-in user, including empty teams (teams with no pokemon on them).
    - Users can add pokemon to a team from this page and delete teams from this page.
    By clicking on a team name, they'll be taken to the TeamDetails page.


- The Team Details Page shows a list of pokemon instances associated with a given team. From this page you can add a pokemon, edit a pokemon, or delete a pokemon (presuming that you're logged in and that the team is yours).

- Adding a pokemon will take you to the Create Pokemon Instance page, where you'll select which species of pokemon you'd like to add to your team. Once your species is selected, you're brought to the appropriate team details page.

- Editing a pokemon brings you to the "Edit Pokemon Instance Page". From here, you can edit a pokemon's species, level, ability, nature, IVs, EVs, and selected moves.
    - Controls for editing a given field are hidden unless the user clicks specifically on the field button that they'd like to edit.


- Attempting to delete a pokemon, team, or user at any point will alert the user with an alert box that the action is non-reversible and that the data will be lost. The deletion is not done unless the user explicitly hits the confirm option of the alert box.