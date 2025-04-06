import React, { useState, useEffect } from 'react';

// Puxando a rota da api
import api from './api';

// Import do charactercadr para exibir as imagens 
import CharacterCard from './components/CharacterCard';

// Import para aparecer a descrição dos persongens
import { customDescriptions } from './descriptions';

// Import da estilização
import './index.css';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    api.get('/api/characters')
      .then(res => {
        const data = res.data.items || res.data;
        const mapped = data.map(c => ({
          ...c,
          description: customDescriptions[c.name] || c.description
        }));
        setCharacters(mapped);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="container">
      <h1 className="title">Personagens de Dragon Ball</h1>
      {characters.length > 0 ? (
        <div className="grid">
          {characters.map(char => (
            <CharacterCard key={char.id} character={char} />
          ))}
        </div>
      ) : (
        <p className="loading">Carregando...</p>
      )}
    </div>
  );
}

export default App;
