import React from 'react';
import "../styles/PlansPage.css"
import Footer from '../components/Footer';
import { useSelector, useDispatch } from 'react-redux';
import {setSelectedPlan} from "../redux/planSelect";
import { addToCart } from '../redux/user';
import CartItem from '../components/CartItem';




// Plan component
function Plan({ name, SPrice, EPrice, DIncome, makePayment}) {
    const dispatch = useDispatch();
    const generalLoginCheck = useSelector((state) => state.generalLoginCheck.logedIn);
    const handlePurchase = () => {

        class Product {
            constructor(name, quantity, price, image) {
                this.name = name || "";
                this.quantity = quantity || 0;
                this.price = price || 0;
                this.image = image || "";
            }
        }

            let selectedPlan= new Product();

             // let autopilotpro = new Product();
  // autopilotpro.name = "AutoPilot Pro PLUS+(version w19)";
  // autopilotpro.price = 7499.99;
  // autopilotpro.quantity = 1;
  // autopilotpro.image = "../images/fximage.png";

    
    
        if (generalLoginCheck==true){
            dispatch(
                setSelectedPlan(name.toLowerCase()),
            )
            



            makePayment(true);
        }
        else{
            window.location.assign("/accountpage");
        }
    };

    return (
        <div className="plan">
            <h2 className='plan-name'>{name} Plan</h2>
           <div className='price-container'>
            <p className='startprice'><sup>$</sup>{SPrice}</p>
                <sub className='endprice'>to  {EPrice}</sub>
           </div>
            
            <ul>
                <li>Daily Income <span>{DIncome}</span></li>
                <li>Duration 7 Days</li>
            </ul>
            <button className='purchase-button' onClick={handlePurchase}>Purchase Plan</button>
        </div>
    );
}

// PlansPage component
function PlansPage(prop) {
   
    const plans = [
        { name: 'Basic', StartPrice: 200, EndPrice: 999, DailyIncome: "70%", Duration: "7 Days" },
        { name: 'Professional', StartPrice: 1000, EndPrice: 4999, DailyIncome: "75%", Duration: "7 Days" },
        { name: 'Gold', StartPrice: 5000, EndPrice: 10000, DailyIncome: "80%", Duration: "7 Days" },
        { name: 'Diamond', StartPrice: 10000, EndPrice: 20000, DailyIncome: "85%", Duration: "7 Days" }
        
    ];

    return (
        <div className="plans-page">
          
            <div className="plans-container">
                {plans.map((plan, index) => (
                    <Plan makePayment={prop.makePayment} key={index} name={plan.name} SPrice={plan.StartPrice} EPrice={plan.EndPrice} DIncome={plan.DailyIncome} />
                ))}
            </div>
           
        </div>
    );
}

export default PlansPage;
