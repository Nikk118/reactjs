import React from 'react'
import { NavLink } from 'react-router-dom'

export function Navbar() {

  const active=({isActive})=>{
    return{
        fontWeight:isActive?'bold':'normal',
        color:isActive? 'black': 'lightdark',
        textDecoration:isActive? 'underline': 'none'
    }
  }
  return (
    <div>
      <nav className='bg-slate-400 text-center flex justify-center gap-10 p-5'>
        <NavLink to={'/'} style={active}>HOME</NavLink>
        <NavLink to={'/about'} style={active}>ABOUT</NavLink>
        <NavLink to={'/products'} style={active}>PRODUCTS</NavLink>
      </nav>
    </div>
    
  )
}

export default Navbar
