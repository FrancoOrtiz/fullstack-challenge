import React from 'react';

export const Card = ({pokemonName, pokemonImg, pokemonNum}) => {

  return (
    <div className="flex w-80 h-40 my-10">
      <div className="h-full w-40 bg-gray-100 border-4 border-blue-300 rounded-full">
        <img className="w-full" src={pokemonImg} alt=""></img>
      </div>
      <div className="mt-4 ml-10 flex flex-col">
        <span className="text-xl font-bold text-gray-400">{pokemonName}</span>
        <span>{pokemonNum}</span>
      </div>
    </div>
  )
}