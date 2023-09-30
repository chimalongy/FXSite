import React from 'react'
import "../styles/OptionCard.css"

export default function OptionCard(props) {
  return (
    <div className='optionCard'>
        <div className='icon' style={{color:`${props.color}`}} >{props.icon}</div>
        <p style={{color:`${props.color}`}}>{props.text}</p>
    </div>
  )
}
