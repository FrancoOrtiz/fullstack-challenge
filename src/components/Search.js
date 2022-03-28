import React from 'react'
import { Card } from './Card'

export const Search = () => {
  return (
    <main style={{minHeight: "calc(100vh - 80px - 200px)"}} className="w-4/5 m-auto mt-4">
        <h2 className="text-black font-bold text-4xl">Resultados de la búsqueda</h2>
        <div className="mt-10">
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </div>
    </main>
  )
}
