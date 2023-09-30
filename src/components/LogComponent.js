import React from 'react'
import { useSelector } from 'react-redux'


function LogComponent() {
  const count= useSelector((state)=>state.counter.count);
  const user = useSelector((state)=>state.user.value);

  
  return (
    <div>
      <h1>Profile</h1>
      <p>firstName: {user.firstName} </p>
      <p>lastName: {user.lastName} </p>
      <p>Email: {user.email} </p>


      <h1>This is the Count: {count}</h1>

      {/* <p>Name:{user.name} </p>
      <p>Age:{user.age} </p>
      <p>Email: {user.email}</p> */}
      
    </div>
  )
}

export default LogComponent 