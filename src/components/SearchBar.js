import React from 'react'

export const SearchBar = () => {
  return (
    <div className="w-full flex items-center justify-between">
        <input className="w-3/5 border-black border-2 pl-2 h-10" placeholder="Ingrese el nombre a buscar"></input>
        <button className="w-1/5 py-3 rounded-xl bg-gray-300 font-bold border-black border-2 text-xl">Buscar</button>
    </div>
  )
}
