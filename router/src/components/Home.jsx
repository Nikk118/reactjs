import React from 'react'
import { useNavigate } from 'react-router-dom'

export function Home() {
  const Navigate= useNavigate();
  return (
    <div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat consequuntur nam facere modi in, perspiciatis, expedita provident impedit amet quibusdam libero voluptatibus optio architecto sunt molestias voluptate vero dicta sequi quisquam, aspernatur incidunt itaque quasi quis? Vitae vero, numquam dolores dolorum tempora culpa officia ab quos facere quidem. Ea, inventore.</p>
      <div className='flex justify-center'>

      <button className="mt-4 border-2 border-black p-1" onClick={()=>Navigate('navigate')}>Navigate</button>
      </div>

    </div>
  )
}

export default Home
