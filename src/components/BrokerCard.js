import React from 'react'
import "../styles/BrokerCard.css"

export default function BrokerCard(props) {
  return (
    <div className='broker-card'>
        <img src={props.image} alt='broker-image'/>
        <div>
            <h3>OPEN ACCOUNT</h3>
            <button>click here</button>
        </div>
    </div>
  )
}
