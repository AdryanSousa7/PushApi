import React from 'react';

// criando um componente chamado CharacterCard
function CharacterCard({ character }) {
  return (
    <div className="card">
      {/* Exibe a imagem do personagem.*/}
      <img src={character.image} alt={character.name} />
      <div className="card-content">
        {/* Mostra o nome do personagem*/}
        <h2 className="card-title">{character.name}</h2>
        {/* Exibe a descrição do personagem*/}
        <p className="card-description">
          {character.description || 'Sem descrição disponível.'}
        </p>
        {character.originPlanet && (
          <p className="card-planet">
            Planeta de origem: {character.originPlanet}
          </p>
        )}
      </div>
    </div>
  );
}

export default CharacterCard;
