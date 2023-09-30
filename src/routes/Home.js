import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer";
import "../styles/Home.css"
import heroImage from "../images/heroimg.png"
import OptionCard from '../components/OptionCard';
import PhonesImage from "../images/twophones.png"



export default function Home() {
  return (
    <div className='Home-div'>
      <div className='section1-container'>
        <header className='nav-header'>
          Nav goes here
        </header>
        <div className='hero-section'>
          <h1>CHOPPA</h1>
          <img src={heroImage} alt='hero-image' className='.hero-image' />
          <div className='hero-buy'>
            <h1>BEFORE $1999.99</h1>
            <h1>NOW  $499.99</h1>
            <button>BUY NOW</button>
          </div>
        </div>
      </div>

      <div className='section2-container'>
        <div className='section2-contents'>
          <h1>WHAT IS CHOPPA?</h1>
          <div className='site-description'>
            <div className='site-description-left'>
              <img src={heroImage} alt="img" />
            </div>
            <div className='site-description-right'>
              <p>
                Choppa Is A Easy-To-Use Automated Trading Robot That Scans The Market In Real-Time, Create A Signal And Execute A Trade With Take Profit And Stop Loss On Your Behalf . It Is  Designed To Help Unprofitable Traders Become Profitable. 99% Of Traders Fail Trying To Trade Manually,Automated CHOPPA Trading Is The Way To Go !!!
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className='section3-container'>
        <div className='section3-contents'>
          <h1>WHY CHOOSE CHOPPA?</h1>
          <div className='whychooseus'>
            <div><OptionCard icon={<i class="fa-solid fa-chart-line"></i>} color={'white'} text={"Trades all Major pairs, indices &metal"} /></div>
            <div><OptionCard icon={<i class="fa-regular fa-face-sad-cry"></i>} color={'white'} text={"Reducing The Impact Of Emotions And Human Error"} /></div>
            <div><OptionCard icon={<i class="fa-solid fa-gears"></i>} color={'white'} text={"Easy to setup and use with 24/7 quick support "} /></div>
            <div><OptionCard icon={<i class="fa-regular fa-computer"></i>} color={'white'} text={"It’s works on phone and laptop on the go !!!"} /></div>
          </div>
          <button>Get Started</button>
        </div>
      </div>

      <div className='section4-container'>
        <div className='section4-contents'>
          <div className='left'>
            <h1>SAVES YOU 5X MORE TIME THAN
              MANUAL TRADING AND OTHER TRADING
              SYSTEMS
            </h1>
            <p>We Designed The Next-Generation Trading Software To Help Unprofitable Traders Become Profitable.</p>
          </div>
          <div className='right'>
            <img src={PhonesImage} alt="" />
          </div>
        </div>
      </div>

      <div className='section5-container'>
        <div className='section5-contents'>
          <h1>What Is Fx?</h1>
          <p>The Fx market is the largest financial market in the world. The FX market is a global, decentralized market where the world’s currencies change hands. Exchange rates change by the second so the market is constantly in flux. Only a tiny percentage of currency transactions happen in the “real economy” involving international trade and tourism like the airport example above. Instead, most of the currency transactions that occur in the global foreign exchange market are bought (and sold) for speculative reasons. Currency traders (also known as currency speculators) buy currencies hoping that they will be able to sell them at a higher price in the future. Compared to the “measly” $22.4 billion per day volume of the New York Stock Exchange (NYSE), the foreign exchange market looks absolutely ginormous with its $6.6 TRILLION a day trade volume.</p>


        </div>
      </div>
      <div className='section6-container'>
        <div className='section6-contents'>
          <h1>Pricing</h1>
          <div className='pricing-container'>
            <div className='left'>
              <h2>CHOPPA</h2>
              <h1>NOW $499</h1>
              <h4>ONE TIME PAYMENT</h4>
              <ul>
                <li>100% fully Automated Trading</li>
                <li>Lifetime mentorship</li>
                <li>Setup instructions</li>
                <li>Install on phone or pc </li>
                <li>License for both MT4 & MT5</li>
                <li>Access to VIP telegram group</li>
                <li>$70 minimum deposit </li>
                <li>Runs 24/7</li>
                <li>Use with any broker </li>
                <li>24/7 support </li>
              </ul>
              <button>BUY NOW</button>
            </div>
            <div className='right'>
              <h2>AUTOPILOT PRO PLUS</h2>
              <h1>$399.99</h1>
              <h4>ONE TIME PAYMENT</h4>
              <ul>
                <li>100% fully Automated Trading</li>
                <li>None</li>
                <li>Setup instructions</li>
                <li>Install on phone or pc </li>
                <li>License for mt4 only </li>
                <li>Private telegram group</li>
                <li>$70 minimum deposit </li>
                <li>Runs 24/7</li>
                <li>Optional brokers  </li>
                <li>24/7 support </li>
              </ul>
              <button>BUY NOW</button>
            </div>
          </div>


        </div>
      </div>

      <div className='section7-container'>
        <div className='section7-contents'>
          <i class="fa-brands fa-telegram icon"></i>
          <h1>FREE CHANEL</h1>
          <button>Join Now</button>
        </div>
      </div>

      <div className='section8-container'>
        <div className='section8-contents'>
          <div class="custom-details-group">
            <details>
              <summary>WHAT IS CHOPA<i class="fa-solid fa-chevron-right"></i></summary>
              <p>choppa is a easy-to-use automated trading robot that scans the market in real-time. Create a signal and execute a trade with take profit and stop loss on your behalf reducing the impact of emotions and human error </p>
            </details>

            <details>
              <summary>WHAT IS THE DIFFERENCE BETWEEN AUTOPILOT PRO AND CHOPA <i class="fa-solid fa-chevron-right"></i></summary>
              <p>The new CHOPPA comes with free Mentorship , has trail Sl & tp and much better accuracy cause its designed to adapt to changing market conditions</p>
            </details>

            <details>
              <summary>IS IT OKAY WHEN THE CURRENCY CHANGES AT CHECK OUTPAGE <i class="fa-solid fa-chevron-right"></i></summary>
              <p>Yes thats totally normal since the store is currently priced in RANDS. this will not affect the pricing of our products/services. </p>
            </details>
            <details>
              <summary>WHAT IS THE MINIMUM DEPOSIT FOR CHOPA TO WORK <i class="fa-solid fa-chevron-right"></i></summary>
              <p>We recommend starting with $70 or higher </p>
            </details>
            <details>
              <summary>IS THIS A MONTHLY SUBSCRIPTION? <i class="fa-solid fa-chevron-right"></i></summary>
              <p>No, there are no monthly or recurring fees, this is a one-time purchase, providing you with a lifetime license</p>
            </details>
          </div>

        </div>
      </div>

        <Footer/>
    </div>
  )
}
