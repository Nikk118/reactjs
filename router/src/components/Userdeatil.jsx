import React from 'react'
import { useParams } from 'react-router-dom'

export default function Userdeatil() {
    // const params=useParams()
    const {userId}=useParams()
    // const userId=params.userId
  return (
    <div className='m-3 p-2'>
      <h1>details for user: {userId}</h1>
    </div>
  )
}
