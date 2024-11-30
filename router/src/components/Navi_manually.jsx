import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Navi_manually = () => {
  const Navigate= useNavigate();
  return (
    <div>
      <h1>navigated programticaly</h1>
      <div className='flex justify-center'>
      <button className="mt-4 border-2 border-black p-1" onClick={()=>Navigate(-1)}>go back</button>
      </div>
    </div>
  )
}
 
export default Navi_manually
