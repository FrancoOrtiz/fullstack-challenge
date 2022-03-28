import React, { Fragment }from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Search } from './components/Search';
import './index.css'

export const App = () => {
  return (
    <Fragment>
      <Header></Header>
      <Search></Search>
      <Footer></Footer>
    </Fragment>
  )
}
