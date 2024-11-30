import React from 'react'
import { Outlet,NavLink } from 'react-router-dom'

export default function Prouduct() {

    const active=({isActive})=>{
        return{
            fontWeight:isActive?'bold':'normal',
            color:isActive? 'white': 'gray',
            textDecoration:isActive? 'underline': 'none'
        }
    }
  return (
    <>
      <div>
      <h1 className='m-4 p-4'>new products...</h1>
      <input type="text"   placeholder='search products..' className='border-2 border-black p-2 m-3'/>
     </div>
   <nav className='m-4 p-2 flex justify-center bg-black text-white gap-11'>
    <NavLink  to={'new'} style={active} >NEW</NavLink>
    <NavLink  to={'populer'} style={active}  >POPULER</NavLink>
   </nav>
   <Outlet/>
    </>

  )
}
