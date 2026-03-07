import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import StatLine from "./StatLine"
import Card from "./Card"
import CardContent from "./CardContent"

function App() {
  const pokemons = [
    { id: 1, name: "Bulbasaur", type: "Grass", hp: 45, attack: 49 },
    { id: 4, name: "Charmander", type: "Fire", hp: 39, attack: 52 },
    { id: 7, name: "Squirtle", type: "Water", hp: 44, attack: 48 },
    { id: 25, name: "Pikachu", type: "Electric", hp: 35, attack: 55 },
    { id: 6, name: "Charizard", type: "Fire", hp: 78, attack: 84 },
    { id: 9, name: "Blastoise", type: "Water", hp: 79, attack: 83 },
    { id: 3, name: "Venusaur", type: "Grass", hp: 80, attack: 82 },
    { id: 150, name: "Mewtwo", type: "Psychic", hp: 106, attack: 110 },
    { id: 39, name: "Jigglypuff", type: "Normal", hp: 115, attack: 45 },
    { id: 143, name: "Snorlax", type: "Normal", hp: 160, attack: 110 },
    { id: 94, name: "Gengar", type: "Ghost", hp: 60, attack: 65 },
    { id: 131, name: "Lapras", type: "Water", hp: 130, attack: 85 },
    { id: 133, name: "Eevee", type: "Normal", hp: 55, attack: 55 },
    { id: 149, name: "Dragonite", type: "Dragon", hp: 91, attack: 134 },
    { id: 59, name: "Arcanine", type: "Fire", hp: 90, attack: 110 },
    { id: 65, name: "Alakazam", type: "Psychic", hp: 55, attack: 50 },
    { id: 68, name: "Machamp", type: "Fighting", hp: 90, attack: 130 },
    { id: 76, name: "Golem", type: "Rock", hp: 80, attack: 120 },
    { id: 130, name: "Gyarados", type: "Water", hp: 95, attack: 125 },
    { id: 148, name: "Dragonair", type: "Dragon", hp: 61, attack: 84 },
  ];
  // Filtre les Pokémon selon le type sélectionné
  const types = [...new Set(pokemons.map((pokemon) => pokemon.type))];
  const [selectedType, setSelectedType] = useState(null);
  const filteredPokemons = selectedType
    ? pokemons.filter((pokemon) => pokemon.type === selectedType)
    : pokemons;

  // Sprite image URL pattern:
  // `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

  return (
    <>
      <h1
        style={{
          color: "white",
          fontWeight: "bolder",
          marginTop: 14,
          fontSize: 66,
        }}
      >
        THE POKEMON CARD COLLECTION
      </h1>
      <p style={{ color: "white", fontWeight: "bold", fontSize: 22 }}>
        Filter by:
      </p>
      {types.map((type) => (
        <button 
          className = "filterButton"
          key = {type} 
          onClick={() => setSelectedType((selectedType) => selectedType === type ? null : type)}>
          {type}
        </button>
        ))}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
          gap: "20px 20px",
        }}
      >
        {filteredPokemons
          .map((pokemon, i) => (
            <Card>
              {" "}
              <CardContent pokemon={pokemon} />{" "}
            </Card>
          ))}
      </div>
    </>
  );
}

export default App
