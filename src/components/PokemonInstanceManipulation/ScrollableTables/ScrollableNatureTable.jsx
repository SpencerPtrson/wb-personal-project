import EditPokemonInstanceSelectNatureRow from "./EditPokemonInstanceSelectNatureRow";

export default function ScrollableNatureTable({
  natureList,
  stateNature,
  setStateNature,
}) {
  const natureRows = natureList.map((nature) => {
    return (
      <EditPokemonInstanceSelectNatureRow
        key={nature.natureId}
        nature={nature}
        stateNature={stateNature}
        setStateNature={setStateNature}
      />
    );
  });

  return (
    <div
      className="table-responsive scrollable"
      style={{ border: "1px solid black" }}
    >
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Increased Stat</th>
            <th>Decreased Stat</th>
          </tr>
        </thead>
        <tbody>{natureRows}</tbody>
      </table>
    </div>
  );
}
