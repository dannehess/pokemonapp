import { createContext, useState, useEffect } from "react";

export const PokemonContext = createContext();

export const PokemonContextProvider = (props) => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState({});
  const [examples, setExamples] = useState([]);
  const [error, setError] = useState("Make a search");

  const capitalize = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const getExamples = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then(response => response.json())
      .then(data => {
        setExamples(() => data.results.map(item => item.name));
      });
    }
    
    useEffect(() => {
      getExamples();
  }, [])

  const searchPokemon = async(e) => {
    e.preventDefault();
    if (search !== "") {
      fetch(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`)
        .then(response => response.json())
        .then(data => {
          setPokemon({
            id: data.id,
            base_experience: data.base_experience,
            name: data.name,
            weight: data.weight,
            height: data.height,
            abilities: data.abilities.map((ability) => ability.ability.name),
            sprites: data.sprites,
            stats: data.stats,
            types: data.types,
          });
          setError("");
        })
        .catch((error) => {
          setError("Pokemon not found...");
        });
    } else {
      setError("Query cannot be empty!");
    }
  };

  return (
    <PokemonContext.Provider
      value={{ search, setSearch, searchPokemon, capitalize, examples, pokemon, error }}
    >
      {props.children}
    </PokemonContext.Provider>
  );
};
