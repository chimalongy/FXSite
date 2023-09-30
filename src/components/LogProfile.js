import React from 'react'
import { UseSelector, useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../redux/counter';
import { login,logout } from '../redux/user';

function LogProfile() {

  const dispatch = useDispatch();
  return (

    <div>
      <h1>Login Buttons</h1>
      <button style={{ margin: "20px 8px", width: "100px" }} onClick={() => {
       dispatch(
        login(
          {
            firstName: "Longinus",
            lastName: "Olegeme",
            email: "me.sparky@gmail.com",
          }
        )
       )
      }}>Login</button>
      <button style={{ margin: "20px 8px", width: "100px" }} onClick={()=>{
        dispatch(
          logout()
        )
      }}>Log Out</button>

      <h1>Counter Butons</h1>
      <button style={{ margin: "20px 8px", width: "100px" }} onClick={() => dispatch(increment())}>Increament</button>
      <button style={{ margin: "20px 8px", width: "100px" }} onClick={() => dispatch(decrement())}>decrement</button>
      <button style={{ margin: "20px 8px", width: "100px" }} onClick={() => dispatch(incrementByAmount(33))}>increment by 33</button>

    </div>
  )
}

export default LogProfile