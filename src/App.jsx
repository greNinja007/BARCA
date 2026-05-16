import PlayerCard from './components/PlayerCard.jsx';
import players from './data/players.js';

function App() {
  return (
    <div>
      <h1>FC Barcelona Legends</h1>
      {players.map((player) => (
        <PlayerCard
          key={player.id}
          name={player.name}
          goals={player.goals}
          assists={player.assists}
          trophies={player.trophies}
          image={player.image}
        />
      ))}
    </div>
  );
}

export default App;
