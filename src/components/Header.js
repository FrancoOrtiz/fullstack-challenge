import React from "react";

export const Header = () => {
  return (
    <header className="flex flex-col gap-3 w-4/5 m-auto">
      <h1 className="text-black text-6xl font-bold">Pokemon finder</h1>
      <p className="text-gray-500 text-xl">
        El que quiere Pokemons, que los busque.
      </p>
    </header>
  );
};
