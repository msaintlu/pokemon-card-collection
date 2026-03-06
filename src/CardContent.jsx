import StatLine from "./StatLine" 

const CardContent = ({pokemon}) => {
    return(
        <>
        <img 
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            className="picture" 
            alt="Pokemon picture"
        />
        <p className="pokemonName">{pokemon.name}</p>
        <div
            style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2px 20px",
            maxWidth: 150,
            fontFamily: "sans-serif",
            justifyItems: "start", 
            }}
        >
            <StatLine label="Type" value={pokemon.type} />
            <StatLine label="HP" value={pokemon.hp} />
            <StatLine label="Attack" value={pokemon.attack} />
        </div>
        </>
    );
};

export default CardContent;