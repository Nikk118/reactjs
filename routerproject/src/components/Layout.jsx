import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'
import Footer from './Footer'
import Home from './Home'

function Layout () {
  return (
    <div>
      <Header/>
        <Outlet/>
      <Footer/>
      {/* <h1>hello</h1> */}
    </div>
  )
}

export default Layout
