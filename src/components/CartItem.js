import React from 'react'
import "../styles/CartItem.css"
import picx from "../images/fximage.png"

export default function CartItem(props) {
    return (
        <div className='cart-item'>
            <div className='cart-item-left'>
                <div className='product-image-container'>
                    <img src={picx} alt='' />
                    <span className='cart-item-count'>{props.quantity}</span>
                </div>
                <div className='cart-detail-container'>
                    <p>{props.name}</p>

                </div>
            </div>
            <div className='cart-item-right'><b>{props.price}</b></div>
        </div>
    )
}
