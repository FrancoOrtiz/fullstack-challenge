import React, {Fragment} from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

export const Layout = ({children}) => {
  return (
    <Fragment>
        <Header/>
            {children}
        <Footer/>
    </Fragment>
  )
}
