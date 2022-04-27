import { useAuth } from "context/authContext";
import React from "react";

export const Card = ({ pokemonName, pokemonImg, pokemonNum }) => {
  const { addFavPokemon, favPokemon } = useAuth();

  const handleFavorite = () => {
    addFavPokemon(pokemonName);
  };

  return (
    <div className="flex w-80 h-52 my-10 relative bg-white py-6 px-2 rounded-lg border-2 border-gray-400">
      <div className="h-full w-40 bg-gray-100 border-4 border-blue-300 rounded-full">
        <img className="w-full" src={pokemonImg} alt=""></img>
      </div>
      <div className="mt-4 ml-10 flex flex-col">
        <span className="text-xl font-bold text-gray-400">{pokemonName}</span>
        <span>{pokemonNum}</span>
      </div>
      <button onClick={handleFavorite} className="absolute right-4 bottom-4">
        {favPokemon.includes(pokemonName) ? "💙" : "🖤"}
      </button>
    </div>
  );
};
