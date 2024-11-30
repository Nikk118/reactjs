
import { useState } from 'react'
import './App.css'

function App() {
const[bg,setbg]=useState('black')  

  return (
    
    <div  className="w-screen h-screen  duration-200"
    style={{ backgroundColor: bg }}>
      <div className="bg-white flex justify-center flex-wrap fixed bottom-10  inset-x-0 mx-10  px-2 rounded-xl gap-6">
        <button className="bg-red-600 outline-none  my-2 text-white" onClick={()=>setbg("red")}> red</button>
        <button className="bg-blue-600 outline-none my-2 text-white" onClick={()=>setbg("blue")}>blue</button>
        <button className="bg-green-600 outline-none my-2 text-white" onClick={()=>setbg("green")}>green</button>
        <button className="bg-lavender-600 outline-none my-2 text-white" onClick={()=>setbg("lavender")}>lavender</button>
        <button className="bg-orange-600 outline-none my-2 text-white" onClick={()=>setbg("orange")}>orange</button>
        <button className="bg-yellow-600 outline-none my-2 text-white" onClick={()=>setbg("yellow")}>yellow</button>
        
      </div>
    </div>
   
  )
}

export default App
