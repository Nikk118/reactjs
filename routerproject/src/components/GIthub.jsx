import React, { useEffect, useState } from 'react'

function GIthub() {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/Nikk118')
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
            setData(data)
        })
    },[])
  return (
    <div className='text-3xl bg-slate-600 text-center p-4 m-4'>
      <h1 >Github followers: 
        {data.followers}</h1>
        <div className='flex justify-center mt-6'>

        <img src={data.avatar_url} alt="github_picture" width={300} height={300}  />
        </div>
    </div>
  )
}

export default GIthub
