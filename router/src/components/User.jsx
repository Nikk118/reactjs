import React from 'react'
import { Outlet,useSearchParams } from 'react-router-dom'

export default function User() {
  const [searchparams,setserachparams]=useSearchParams()
  const isparams= searchparams.get('filter')==='active'
  return (
    <>
    <div>
      <h1>user 1</h1>
      <h1>user 2</h1>
      <h1>user 3</h1>
      <Outlet/>
    </div>
    <button onClick={()=>setserachparams({filter:'active'})} className=' p-2 border-2 border-black m-3'>set params</button>
    <button onClick={()=>setserachparams({})} className='border-2 border-black m-3 p-2'>remove params</button>

    {
      isparams?(
        <h2 className='m-3'>
          params are set
        </h2>
      ):(
        <h2 className='m-3'>
          no params
        </h2>
      )
    }
    </>
  )
}
