import React from 'react'
import Footer from "../components/Footer";
import "../styles/Brokers.css"
import BrokerCard from '../components/BrokerCard'
import broker1 from "../images/broker1.png"
import broker2 from "../images/broker2.png"
import broker3 from "../images/broker3.png"
import broker4 from "../images/broker4.png"
import logo from "../images/logo.png"
import servicesimage1 from "../images/servicesimage1.jpg"
import servicesimage2 from "../images/servicesimage2.jpg"
import servicesimage3 from "../images/servicesimage3.jpg"
import servicesimage4 from "../images/servicesimage4.jpg"
import servicesimage5 from "../images/servicesimage5.jpg"



export default function
    () {
    return (
        <div className='brokers'>
            <div className='broker-hero' style={{background:`url(${logo})`, backgroundSize: 'cover',
        backgroundPosition:"center"}}>
                <h1>BROKERS RECOMMENDED <br /> BY FXSNIPER24</h1>
                <p>our services work with any broker of your choice so you dont have to <br /> use these brokers</p>
            </div>
            <div className='container'>
                <div className='broker-list'>
                    <div>
                        <BrokerCard image={broker1} />
                    </div>
                    <div>
                        <BrokerCard image={broker2} />
                    </div>
                    <div>
                        <BrokerCard image={broker3} />
                    </div>
                    <div>
                        <BrokerCard image={broker4} />
                    </div>

                </div>

            </div>
            <div className='sect'>
                <div className='services'>
                    <h2> OUR SERVICES</h2>
                    <div className='service-cards'>
                        <div><img src={servicesimage1} /></div>
                        <div><img src={servicesimage2} /></div>
                        <div><img src={servicesimage3} /></div>
                        <div><img src={servicesimage4} /></div>
                        <div><img src={servicesimage5} /></div>
                    </div>

                </div>
            </div>
           <Footer/>
        </div>
        
    )
}
