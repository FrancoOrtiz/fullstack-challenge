import React from 'react'
import { SearchBar } from './SearchBar';

export const Header = () => {
  return (
      <header className="flex flex-col gap-3 w-4/5 h-40 m-auto">
          <h1 className="text-black text-6xl ">Pokemon finder</h1>
          <p className="text-gray-500">El que quiere Pokemons, que los busque.</p>
          <SearchBar />
      </header>
  )
}
