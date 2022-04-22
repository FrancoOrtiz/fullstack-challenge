import React, { createContext, useState, useEffect } from "react";

export const dataContext = createContext();

export const DataProvider = ({ children }) => {
  const [page, setPage] = useState(0);
  const [pokemons, setPokemons] = useState([]);

  const fetchAllPokemons = async () => {
    const url = `http://localhost:3002/api/pokemons/${page}`;
    const peticion = await fetch(url);
    const pokemons = await peticion.json();
    setPokemons(pokemons);
  };

  const pokemonByName = async (namedPokemon) => {
    if (namedPokemon === "") {
      fetchAllPokemons();
    } else {
      const url = `http://localhost:3002/api/${namedPokemon}`;
      const peticion = await fetch(url);
      const named = await peticion.json();
      setPokemons(named);
    }
  };

  useEffect(() => {
    fetchAllPokemons();
  }, [page]);

  return (
    <dataContext.Provider
      value={{
        pokemons,
        setPokemons,
        fetchAllPokemons,
        setPage,
        pokemonByName,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};
