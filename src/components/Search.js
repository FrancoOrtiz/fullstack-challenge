import React, {useContext} from 'react'
import { DataContext } from '../context/DataContext'
import { SearchBar } from './SearchBar'
import { SearchResult } from './SearchResult'

export const Search = () => {

  return (
    <div className="w-4/5 m-auto">
        <SearchBar></SearchBar>
        <SearchResult ></SearchResult>
    </div>
  )
}
