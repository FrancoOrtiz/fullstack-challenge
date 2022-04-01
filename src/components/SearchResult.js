import React, {useContext} from 'react'
import { DataContext } from '../context/DataContext'
import { Card } from './Card'

export const SearchResult = () => {

  const {pokemons, setPage, lastPokemons} = useContext(DataContext)
  
  return (
    <main style={{minHeight: "calc(100vh - 80px - 200px)"}} className="mt-10 relative">
        <h2 className="text-black font-bold text-4xl">Resultados de la búsqueda</h2>
        <div className="flex flex-col bg-blue-500flex-wrap">
          {pokemons.map((pokemon, id) => {
            return <Card key={id} pokemonName={pokemon.name} pokemonNum={pokemon.order} pokemonImg={pokemon.img}></Card>
          })}
          <div className="w-full absolute -bottom-5 flex justify-between">
            <button className='w-20 bg-white border-2 border-black rounded-lg' onClick={() => setPage((prev) => prev > 0 ? prev - 1 : prev)}>Ant.</button>
            <button className='w-20 bg-white border-2 border-black rounded-lg' onClick={() => setPage((prev) => prev + 1)}>Sig.</button>
          </div>  
        </div>
    </main>
  )
}
