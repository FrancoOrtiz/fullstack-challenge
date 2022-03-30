import React, {createContext, useState, useEffect} from 'react'

export const DataContext = createContext();

export const DataProvider = ({children}) => {

    const [page, setPage] = useState(0);

    const [pokemons, setPokemons] = useState([]);

    const fetchAllPokemons = async () => {
        const url = `http://localhost:3001/api/pokemons/${page}`
        const peticion = await fetch(url)
        const pokemons = await peticion.json();
        setPokemons(pokemons);
    }

    useEffect(() => {
        fetchAllPokemons();
    }, [page])

    return (
        <DataContext.Provider value={{
            pokemons,
            setPokemons,
            fetchAllPokemons,
            setPage,
        }}>
            {children}
        </DataContext.Provider>
    )
}
