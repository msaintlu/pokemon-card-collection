import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import StatLine from "./StatLine"
import Card from "./Card"
import CardContent from "./CardContent"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'; // Cœur plein (favori)
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'; // Cœur vide (non favori)

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

  const [selectedType, setSelectedType] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  const types = [...new Set(pokemons.map((pokemon) => pokemon.type))];

  // toggleFavorites est appelée au clique sur le coeur :
  // ajoute l'id du Pokemon si n'est pas dans les favoris, et le retire s'il est dans les favoris
  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  // || = "ou". Si selectedType est false, !selectedType est true dc tous les pokemons passent le fitre
  const filteredPokemons = pokemons
    .filter((pokemon) => !selectedType || pokemon.type === selectedType)
    .filter((pokemon) => !showFavorites || favorites.includes(pokemon.id));


  // Sprite image URL pattern:
  // `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

  return (
    <>
      {/* TITLE + BUTTONS */}
      <div>
        {" "}
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
        {/* BUTTONS */}
        <p style={{ color: "white", fontWeight: "bold", fontSize: 22 }}>
          Filter by:
        </p>
        <div style={{ marginBottom: "32px" }}>
          {/* BOUTONS FILTRES TYPES */}
          {types.map((type) => (
            <button
              className="filterButton"
              key={type}
              onClick={() => {
                setSelectedType((selectedType) =>
                  selectedType === type ? null : type
                );
              }}
              style={{
                backgroundColor:
                  selectedType === type ? "rgb(209, 3, 3,0.6)" : "#fff8ba",
              }}
            >
              {type}
            </button>
          ))}
          {/* BOUTON FILTRE FAVORITES */}
          <button
            className="filterButton"
            onClick={() => setShowFavorites((prev) => !prev)}
            style={{
              backgroundColor: showFavorites
                ? "rgb(209, 3, 3,0.6)"
                : "rgb(209, 3, 3,0.4)",
            }}
          >
            Favorites
          </button>
        </div>
      </div>
      {/* CARDS */}
      <div style={{ minHeight: "220vh" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
            gap: "20px 20px",
          }}
        >
          {filteredPokemons.map((pokemon, i) => {
            /*(*/
            const isFavorite = favorites.includes(pokemon.id);
            return (
              <Card>
                {/* BOUTON COEUR FAVORI */}
                <button
                  onClick={() => toggleFavorite(pokemon.id)}
                  style={{
                    position: "absolute",
                    top: "8px",
                    right: "8px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "20px",
                    zIndex: 1,
                  }}
                >
                  <FontAwesomeIcon
                    icon={isFavorite ? solidHeart : regularHeart}
                    color={isFavorite ? "#d10303" : "#eeb90c"}
                  />
                </button>{" "}
                {/* INFOS POKEMON */}
                <CardContent pokemon={pokemon} />{" "}
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App
