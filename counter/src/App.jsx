import {useState} from "react";
import './App.css'


function App() {
 let[count,setcount]=useState(0);
 let[text,settext]=useState("number of clicks:");

 const inc=()=>{
  if(count<10){

    setcount(count+1);
  }else{
    settext("too many clicks: ");
  }
 }
 const dec=()=>{
  if(count>0){
    setcount(count-1);
  }else{
    settext("no clicks: ");

  }
 } 
  return (
   <>
  <h1>{text}{count}</h1>
  <button onClick={inc}>increase</button>
  <button onClick={dec}>decrease</button>
   </>
  )
}

export default App
