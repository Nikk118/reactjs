import { useState ,useCallback,useEffect,useRef} from "react";
function App() {
const[len,setlen]=useState(8);
const[int,setint]=useState(false);
const[char,setchar]=useState(false);
const[pass,setpass]=useState("");
const passref=useRef(null);



const passgen = useCallback(() => {
  let pass = "";
  let str = "qweiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
  
  if (int) str += "1234567890";
  if (char) str += "!@#$%^&*(){}";
 
  for (let i = 1; i <= len; i++) {
    let randomIndex = Math.floor(Math.random() * str.length);
    pass += str.charAt(randomIndex);
  }
  
  setpass(pass);
  
  
}, [len, int, char, setpass]);


useEffect(()=>{
  passgen();
},[len,int,char,passgen])


const copy=useCallback(()=>
  {
    passref.current?.select()
  navigator.clipboard.writeText(pass);
},[pass])
  return (
   
      <div className="w-screen h-screen bg-black pt-3">
        <div className="text-center bg-slate-600 w-[500px] m-auto rounded-xl">
          <div>
            <h1 className="text-white ">password generator</h1>
          </div>
          <div className="my-5 pb-4">
            <input type="text" 
            value={pass}
            placeholder="password"
            className="h-10 w-8/12 px-3 py-1 outline-none rounded"
            readOnly
            ref={passref}/>
            <button className="bg-blue-400 text-white outline-none shrink-1" 
            onClick={copy}>copy</button>
          </div>
          <div className="flex gap-4 justify-center pb-4">
            <div className="flex gap-1">

              <input type="range"
              min={8} max={12}
              value={len} 
              className="cursor-pointer"
              onChange={(e)=>setlen(e.target.value)}
             />
              <label className="text-white">lenght({len})</label>
            </div>
            <div className="flex gap-1">

              <input type="checkbox"onChange={()=>setint((prev)=>!prev)} />
             <label htmlFor=""  className="text-white" >integer</label>
            </div>
            <div className="flex gap-1">

              <input type="checkbox"  onChange={()=>setchar((prev)=>!prev)}/>
              <label className="text-white">character</label>
            </div>
          </div>
        </div>
      </div>
   
  );
}

export default App;
