import './PlayerCard.css';

function PlayerCard({ name, goals, assists, trophies, image }) {
  return (
    <div className="player-card">
      <div className="player-info">
        <img src={image} alt={name} />

        <h2>{name}</h2>
      </div>

      <div className="player-stats">
        <div className="stat">
          <span className="label">Goals</span>
          <span className="value">{goals}</span>
        </div>

        <div className="stat">
          <span className="label">Assists</span>
          <span className="value">{assists}</span>
        </div>

        <div className="stat">
          <span className="label">Trophies</span>
          <span className="value">{trophies}</span>
        </div>
      </div>
    </div>
  );
}

export default PlayerCard;
