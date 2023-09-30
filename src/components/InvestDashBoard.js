import React, { useState } from 'react'
import "../styles/InvestDashBoard.css"
import PlansPage from '../routes/PlansPage';
import Payment from './Payment';
import Checkout from '../routes/Checkout';
import { useSelector, useDispatch } from 'react-redux';


export default function () {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.value);
    const [showPayment, setShowPayment] = useState(false);




    return (

        <div className='invest-tab'>
            {/* CHANGE THE  BELLOW */}
            {user.investmentEnabled == ("TRUE") ? (
            <div className='investment-enabled'>

                <div className='investment-details'>
                    <h1>Current investment Details</h1>
                    <div className='investent-detail'>
                        <i className="fa-solid fa-seedling"></i>
                        <p><b>Investment Plan:</b> {user.investmentPlan.toUpperCase()}</p>
                    </div>
                    <div className='investent-detail'>
                        <i className="fa-solid fa-arrow-up-wide-short"></i>
                        <p><b>Invested Amount:</b> {user.investmentAmount}</p>
                    </div>
                    <div className='investent-detail'>
                        <i className="fa-solid fa-stopwatch"></i>
                        <p><b>Duration:</b> 7 Days</p>

                    </div >
                    <div className='investent-detail'>
                        <i class="fa-solid fa-calendar-check"></i>
                        <p><b>Start Date:</b>{user.investmentDate}</p>
                    </div>
                    
                </div>


            </div>) : (
                <div>
                    {showPayment ? (<Checkout />) : (<PlansPage makePayment={setShowPayment} />)}
                </div>
            )}
        </div>
    )
}
