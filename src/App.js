import TeamsList from "./TeamsList";


const teams = [
  {
    id: 0,
    name: "Mean Girls",
    division: "12u",
    // Add 'rating' and 'category' if they exist
  },
  {
    id: 1,
    name: "Diablos",
    division: "12u",
    // Add 'rating' and 'category' if they exist
  },
  {
    id: 2,
    name: "Bombers",
    division: "12u",
    // Add 'rating' and 'category' if they exist
  },
];

function App() {
  return (
    <div>
      <h1>Tournament Bracket</h1>
      { teams.map( t => <TeamsList team={t} /> ) }
    </div>
  );
}

export default App;
