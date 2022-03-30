import React, {useContext} from 'react'
import { DataContext } from '../context/DataContext'
import { Card } from './Card'

export const SearchResult = () => {

  const {pokemons, setPage} = useContext(DataContext)
  
  return (
    <main style={{minHeight: "calc(100vh - 80px - 200px)"}} className="mt-10">
        <h2 className="text-black font-bold text-4xl">Resultados de la búsqueda</h2>
        <div className="flex relative flex-col flex-wrap">
          <button className='absolute -left-20' onClick={() => setPage((prev) => prev - 1)}>izquierda</button>

          {pokemons.map((pokemon, id) => {
            return <Card key={id} pokemonName={pokemon.name} pokemonImg={pokemon.img}></Card>
          })}

          <button className='absolute right-20' onClick={() => setPage((prev) => prev + 1)}>derecha</button>
          
        </div>
    </main>
  )
}
