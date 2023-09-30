import React from 'react'
import { useState, useEffect, useRef } from 'react';
import '../styles/Dashboard.css'
import UserDashboard from '../components/UserDashboard';
import InvestDashBoard from '../components/InvestDashBoard';
import DashboardWithdrawal from '../components/DashboardWithdrawal';
import { logout } from '../redux/user';
import { generallogout } from '../redux/generalLoginCheck';

import { useDispatch, useSelector } from 'react-redux'

export default function DashBoard() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.value);
    
    const [activeTab, setActiveTab] = useState(0);
    const [click, setclick] = useState(false);
    const [showTab, setShowTab] = useState(false);

    const tabMenuRef = useRef();




    const handleClick = () => {
        setclick(!click);
        // setShowTab(!showTab)
        tabMenuRef.current.classList = '';
        if (click == true) {
            tabMenuRef.current.classList.add('tab-menu-container');
        }
        else {
            tabMenuRef.current.classList.add("tab-menu-container-visible");
        }




    };
    const handleTabClick = (index) => {
        setActiveTab(index);
        handleClick();
        // setShowTab(!showTab)

    };
    const tabContent = [

        {
            tableHeader: "Dashboard",
            tableIcon: <i class="fa-solid fa-gauge-high icon"></i>,
            content: <div className='tab-content-item'>
                <h1 className='tab-content-item-header'>Hi {user.firstName}, Welcome to your dashbord</h1>
                {/* <div>
                    <h1>Account Summary</h1>
                    <p>Current Plan: none</p>
                    <p>Elapsed Days: 0</p>
                </div> */}
                <div className='tab-content-item-body'>
                    <UserDashboard />
                </div>

            </div>
        },
        {

            tableHeader: "Invest",
            tableIcon: <i class="fa-solid fa-money-check-dollar icon"></i>,
            content: <div className='tab-content-item'>
                <h1 className='tab-content-item-header'>Invest</h1>
                <div className='tab-content-item-body'>
                    <InvestDashBoard />
                </div>
            </div>
        },
        {

            tableHeader: "Withdraw",
            tableIcon: <i class="fa-solid fa-money-bill-transfer icon" ></i>,
            content: <div className='tab-content-item'>
                <h1 className='tab-content-item-header'>Withdraw</h1>
                <div className='tab-content-item-body'>
                    <DashboardWithdrawal />
                </div>
            </div>
        },
        {

            tableHeader: "Transactions",
            tableIcon: <i class="fa-regular fa-calendar-days icon"></i>,
            content: <div className='tab-content-item'>
                <h1 className='tab-content-item-header'>Transactions</h1>
                <div className='tab-content-item-body'></div>
            </div>
        },
        {

            tableHeader: "Settings",
            tableIcon: <i class="fa-solid fa-sliders icon"></i>,
            content: <div className='tab-content-item'>
                <h1 className='tab-content-item-header'>Account Settings</h1>
                <div className='tab-content-item-body'></div>
            </div>
        }
    ];
    return (
        <div className="vertical-tab-menu">


            <div className={`tab-menu ${click ? 'tab-menu-column' : 'tab-menu-row'}`}>
                <div className='tab-logo-container'>
                <h1>Musa FX</h1>
                <div onClick={()=>{
                    dispatch(logout())
                    dispatch(generallogout())

                }} >
                    <h3 >Log Out</h3>
                    <i class="fa-solid fa-right-from-bracket"></i>
                </div>
                </div>
                
                <div className='tab-menu-container' ref={tabMenuRef}>
                    {tabContent.map((content, index) => (

                        <div

                            key={index}
                            className={'tab-item'}
                            // className={`tab-item ? 'active' : ''}`}
                            onClick={() => handleTabClick(index)}
                        >


                            <div className='menu-item'>
                                {content.tableIcon}
                                {content.tableHeader}
                            </div>
                        </div>
                    ))}
                </div>

                

                <div className='hamburger' onClick={handleClick}>

                    {click ? (<i class="fa-solid fa-circle-xmark menu-item"></i>) : (<i class="fa-solid fa-bars menu-item" ></i>)}
                </div>

            </div>

            <div className="tab-content">
                {tabContent[activeTab].content}
            </div>
        </div>
    );
}
