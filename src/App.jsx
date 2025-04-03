import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from './components/CharacterCard';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get("/api/Characters")
      .then(response => {
        console.log('Dados da API:', response.data);
        setCharacters(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar personagens:', error);
      });
  }, []);
  

  return (
    <div>
      <h1>Personagens de Dragon Ball</h1>
      
      {Array.isArray(characters) ? (
        characters.map(char => (
          <div key={char.id}>
            <h2>{char.name}</h2>
            <img src={char.image} alt={char.name} />
          </div>
        ))
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}
export default App;  
