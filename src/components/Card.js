import React from 'react';

export const Card = ({pokemonName, pokemonImg}) => {

  return (
    <div className="flex w-80 h-40 my-10">
      <div className="h-full w-40 bg-gray-500">
        <img className="w-full" src={pokemonImg} alt=""></img>
      </div>
      <span className="mt-4 ml-10 text-xl font-bold text-gray-400">{pokemonName}</span>
    </div>
  )
}