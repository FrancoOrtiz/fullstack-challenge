import React, { Fragment } from 'react'

export const Header = () => {
  return (
      <header>
          <h1>Pokemon finder</h1>
          <p>El que quiere Pokemons, que los busque.</p>
          <SearchBar />
      </header>
  )
}
