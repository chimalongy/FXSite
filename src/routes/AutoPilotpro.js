import React from 'react'
import "../styles/AutoPilotpro.css"
import bkg1 from "../images/fximage.webp"
import bkg2 from "../images/fximage.png"
import TradingViewWidget from '../components/TradingViewWidget'
import Footer from "../components/Footer";

export default function 
() {
  return (
    <div className='autopilotpro'>
        <div className='L1'>
            <div className='L1-left'>
                <img src={bkg1} alt='bkg'/>
            </div>
            <div className='L1-right'>
                <h3>ON SALE</h3>
                <h2>AutoPilot Pro PLUS+ (version w19)</h2>
                <p>R 14,999.00</p>
                <h2>R 7,499.99</h2>
                <button>Add to Cart</button>
                <button>Buy it now</button>

            </div>
            
        </div>
        <div className='L2'>
                <h1>WHAT IS AUTOPILOT PRO PLUS?</h1>
                <p>The Autopilot pro is a trading robots/software that were designed to help unprofitable traders become profitable. 99% of traders fail trying to trade manually, automating your trading by using trading robots/softwares is the way to go! It’s suitable for beginners experienced Traders and professional traders alike</p>
                
                <div className='description'>
                <p>Its 100% fully automated</p>

                <p>comes with MENTORSHIP</p>

                <p>works on phone & laptop</p>

                <p>doesn't require trading experience</p>

                <p>installation videos and guides included</p>

                <p>works with any broker</p>

                <p>trades 24/7</p>

                <p>works on MT4 & MT5</p>

                <p>minimum deposit R1000/$70</p>

                <p>24/7 support included</p>
                </div>
       
        </div>
        <div className='L3'>
                <h1>TRADE LIKE A PRO+</h1>
        </div>
        <div className='L4'>
            <button>Order Now</button>
            <h1>GET AUTOMATED TODAY</h1>
            <p>STOP BLOWING ACCOUNTS and get the AUTOPILOT PRO+ while its still one SALE !!!</p>
            
        </div>

        <div className='L5'>
            <TradingViewWidget/>
        </div>

        <Footer/>
    </div>
  )
}
