import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
      setPokemon(response.data.results);
    };

    fetchPokemon();
  }, []);

  const filteredPokemon = pokemon.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Pokémon List</h1>
      <input
        type="text"
        placeholder="Search Pokémon..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="pokemon-container">
        {filteredPokemon.map((p, index) => (
          <div key={index} className="pokemon-card">
            <h3>{p.name}</h3>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt={p.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
