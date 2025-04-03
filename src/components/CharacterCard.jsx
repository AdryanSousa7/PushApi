import React from 'react';

function CharacterCard({ character }) {
  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <p>{character.description}</p>
      {/* Adicione outras propriedades conforme necessário */}
    </div>
  );
}

export default CharacterCard;