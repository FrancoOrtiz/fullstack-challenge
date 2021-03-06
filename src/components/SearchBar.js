import React, { useContext } from "react";
import { dataContext } from "../context/dataContext";
import { useForm } from "../hooks/useForm";

export const SearchBar = () => {
  const { pokemonByName } = useContext(dataContext);

  const initialState = {
    name: "",
  };

  const [formValues, handleInputChange] = useForm(initialState);
  const { name } = formValues;

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    pokemonByName(name);
  };

  return (
    <form
      onSubmit={handleOnSubmit}
      className="w-full mt-6 flex items-center justify-between"
    >
      <input
        type="text"
        onChange={handleInputChange}
        name="name"
        value={name}
        className="w-3/5 border-black border-2 pl-2 h-10 placeholder:text-black"
        placeholder="Ingrese el nombre a buscar"
      ></input>
      <button className="w-1/5 py-3 shadow-button rounded-xl bg-gray-300 font-bold border-black border-2 text-xl">
        Buscar
      </button>
    </form>
  );
};
