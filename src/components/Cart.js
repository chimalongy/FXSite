import React, { useState } from 'react'
import CartItem from './CartItem';
import "../styles/Cart.css"
import { useSelector } from 'react-redux';



export default function Cart(props) {
  const generalLoginCheck = useSelector((state) => state.generalLoginCheck.logedIn);
  const [paymentAmout, setPaymentAmount]= useState(0);
  
  

 



  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      <div className="cart-items">
        {generalLoginCheck ? (
          <div>
            <h1>{props.plan.toUpperCase()} Plan</h1>

            <input
              placeholder={`${props.min}- ${props.max}`}
              value={paymentAmout}
              onChange={(e)=>{
                setPaymentAmount(e.target.value)
                props.setAmount(e.target.value)
              }}
            />
            <span>{props.paymentAmoutError}</span>
           




          </div>

        ) :
          (

            <div>
              {/* {cartList.map((item, index) => (
        <CartItem
          key={index}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          image={item.image}
        />
      ))} */}

              Logged Out
            </div>

          )}


      </div>
    </div>
  )
}
