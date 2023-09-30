import React, { useState, useRef, useEffect } from 'react'
import "../styles/Payment.css"
import QRCodeGenerator from './QRCodeGenerator';
import PopupModal from '../components/PopupModal';
import dataFetch from "./modules/dataFetch";
import { useSelector } from 'react-redux';


export default function Payment(props) {
    const [cryptoPayment, setcryptoPayment] = useState(false);
    const [showPaymentDetails, setshowPaymentDetails] = useState(false);

    const [showLoading, setShowloading] = useState(false);
    let cryptoWalletAddress = "1FfmbHfnpaZjKFvyi1okTjJJusN455paPH"

    const cryptopayoption = useRef('null')
    const bankpayoption = useRef('null')
    const bankpaydetaildiv = useRef('null')

    //============ON LOAD=====================================

    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const openPopup = () => {
        setIsPopupVisible(true);
    };

    const closePopup = () => {
        setIsPopupVisible(false);
    };



    const setBankPay = () => {
        setcryptoPayment(false);
        setshowPaymentDetails(true);
        setBankPaid(false);
        cryptopayoption.current.style.backgroundColor = 'grey';
        cryptopayoption.current.style.pointerEvents = 'none';
        bankpayoption.current.style.pointerEvents = 'none';
        setShowloading(true);
        setTimeout(() => {
            setShowloading(false);
            setIsBankPayTimerRunning(true);
            startBankPayTimer();
        }, 2000);


        setBankPayRemainingTime(60);

    }
    const setCryptoPay = () => {
        setcryptoPayment(true);
        setshowPaymentDetails(true);
        setCryptoPaid(false)
        bankpayoption.current.style.backgroundColor = 'grey';
        bankpayoption.current.style.pointerEvents = 'none';
        cryptopayoption.current.style.pointerEvents = 'none';
        setShowloading(true);
        setTimeout(() => {
            setShowloading(false);
            setIsCryptoPayTimerRunning(true);
            startCryptoPayTimer();
        }, 2000);
        setCryptoPayRemainingTime(60);

    }

    function copyCryptoAddress() {
        navigator.clipboard.writeText(cryptoWalletAddress);
    }


    const initialTime = 30 * 60; // 30 minutes in seconds
    const [bankPayRemainingTime, setBankPayRemainingTime] = useState(60);
    const [isBankPayTimerRunning, setIsBankPayTimerRunning] = useState(false);
    const [cryptoPayRemainingTime, setCryptoPayRemainingTime] = useState(60);
    const [isCryptoPayTimerRunning, setIsCryptoPayTimerRunning] = useState(false);

    const BankScreenShotInputRef = useRef(null);
    const cryptoScreenShotInputRef = useRef(null);

    const generalLoginCheck = useSelector((state) => state.generalLoginCheck.logedIn);
    const user = useSelector((state) => state.user.value);
    const selectedPlan = useSelector((state) => state.selectedPlan.selectedPlan);

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };


    let BankPayTimerInterval;
    const startBankPayTimer = () => {
        setIsBankPayTimerRunning(true);
        BankPayTimerInterval = setInterval(() => {
            setBankPayRemainingTime(prevTime => {
                if (prevTime > 0) {
                    console.log("hello");
                    return prevTime - 1;
                } else {
                    clearInterval(BankPayTimerInterval);
                    setIsBankPayTimerRunning(false);
                    return 0;
                }
            });
        }, 1000);
    };

    const stopBankPayTimer = () => {
        clearInterval(BankPayTimerInterval);
        setBankPayRemainingTime(0);
        setIsBankPayTimerRunning(false)
    };

    let cryptoPayTimerInterval;
    const startCryptoPayTimer = () => {
        setIsCryptoPayTimerRunning(true);
        cryptoPayTimerInterval = setInterval(() => {
            setCryptoPayRemainingTime(prevTime => {
                if (prevTime > 0) {
                    console.log("hello");
                    return prevTime - 1;
                } else {
                    clearInterval(cryptoPayTimerInterval);
                    setIsCryptoPayTimerRunning(false);
                    return 0;
                }
            });
        }, 1000);
    };

    const stopCryptoPayTimer = () => {
        clearInterval(cryptoPayTimerInterval);
        setCryptoPayRemainingTime(0);
        setIsCryptoPayTimerRunning(false)
    };






    const [bankPaid, setBankPaid] = useState(false);
    const [cryptoPaid, setCryptoPaid] = useState(false);


    const handleBankPaymentCheckbox = () => {
        setBankPaid(!bankPaid);

    };
    const handleCryptoPaymentCheckbox = () => {
        setCryptoPaid(!cryptoPaid);

    };

    function cancelBankPayment() {
        stopBankPayTimer();
        setshowPaymentDetails(false)
        setBankPayRemainingTime(0);
        clearTimeout(startBankPayTimer);
        setIsBankPayTimerRunning(false);
        bankpayoption.current.style.backgroundColor = 'transparent';
        bankpayoption.current.style.pointerEvents = 'auto';
        cryptopayoption.current.style.pointerEvents = 'auto';
        cryptopayoption.current.style.backgroundColor = 'transparent';
    }
    function cancelCryptoPayment() {
        stopCryptoPayTimer();
        setshowPaymentDetails(false)
        setCryptoPayRemainingTime(0);
        clearTimeout(startCryptoPayTimer);
        setIsCryptoPayTimerRunning(false);
        bankpayoption.current.style.backgroundColor = 'transparent';
        bankpayoption.current.style.pointerEvents = 'auto';
        cryptopayoption.current.style.pointerEvents = 'auto';
        cryptopayoption.current.style.backgroundColor = 'transparent';
    }

    const handleBankUploadButton = () => {
        BankScreenShotInputRef.current.click();
    };
    const handleCryptoUploadButton = () => {
        cryptoScreenShotInputRef.current.click();
    };

    const handleBankScreenShotUpload = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            // Handle the selected file here, for example, upload it to a server.
            console.log('Selected file:', selectedFile);
            RegisterPayment(selectedFile,"bank");
            // alert("Screenshot Uploaded")

            cancelBankPayment();
           // alert("Upload Confirmed. We are reviewing your payment.")
           window.location.assign("/dashboard")


        }
    };
    const handleCryptoScreenShotUpload = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            // Handle the selected file here, for example, upload it to a server.
            console.log('Selected file:', selectedFile);
            RegisterPayment(selectedFile,"crypto");
            cancelBankPayment();
            // alert("Screenshot Uploaded")
            window.location.assign("/dashboard")


        }
    };
    // //////////////////////////////////SEND PAYMENT TO DATABASE/////////////////////////////////////////

    function RegisterPayment(screenShot,paymentMethod) {

        
        if (generalLoginCheck) {


            const fData = new FormData();
            fData.append('email', props.payerdetails.email);
            fData.append('paymentfor', props.paymentFor);
            fData.append('amount', props.amount);
            fData.append('paymentMethod',paymentMethod);
            fData.append('screenshot', screenShot);
            fData.append('registerPayment', "yes");
            

            const url = "http://localhost/MusaFX/engine.php";
            dataFetch(url, fData)
                .then(data => {
                    if (data == "sucessful") {

                        // cancelCryptoPayment();
                        // alert("Upload Confirmed. We are reviewing your payment.")

                    }
                })
                .catch(error => {
                    console.error(error);
                });


        }

    }

    return (
        <div className='payment-container'>



            <ul className='pay-select'>
                <li className='payOPT ' onClick={setBankPay} ref={bankpayoption} >
                    <h2>Bank Transfer</h2>
                    <i className="fa-solid fa-building-columns payicon"></i>
                </li>
                <li className='payOPT' onClick={setCryptoPay} ref={cryptopayoption}>
                    <h2>Bitcoin</h2>
                    <i className="fa-brands fa-bitcoin payicon"></i>
                </li>
            </ul>

            <div className='payment-params'>


                {showPaymentDetails ? (
                    <div className='paymentbox'>
                        {
                            cryptoPayment ?
                                //   ===============================================Crypto Payment Codes start   
                                (
                                    <div>
                                        <div>
                                            {showLoading ? (
                                                <div className='loadingpage' >
                                                    <h1>...Loading Crypto Payment</h1>
                                                </div>
                                            ) : (
                                                <div className='paydetail'>

                                                    <div >
                                                        <QRCodeGenerator text={cryptoWalletAddress} />
                                                    </div>
                                                    <div className='crypto-addres-detail'>
                                                        <p>{cryptoWalletAddress}</p>
                                                        <i onClick={copyCryptoAddress} className="fa-solid fa-copy"></i>
                                                    </div>

                                                    <label>
                                                        <input
                                                            type="checkbox"
                                                            checked={cryptoPaid}
                                                            onChange={handleCryptoPaymentCheckbox}
                                                        />
                                                        I have made payment
                                                    </label>
                                                    {cryptoPaid ? (
                                                        <div className='uploadcontrols'>
                                                            <button onClick={handleCryptoUploadButton} className='uploadbutton'>Upload Reciept</button>
                                                            <input
                                                                type="file"
                                                                ref={cryptoScreenShotInputRef}
                                                                accept=".jpg, .jpeg, .png, .gif"
                                                                style={{ display: 'none' }}
                                                                onChange={handleCryptoScreenShotUpload}
                                                            />
                                                        </div>) : (<h1>please confirm payment: {formatTime(cryptoPayRemainingTime)}</h1>)}
                                                    <div className='pay-controls'>
                                                        <button onClick={cancelCryptoPayment}>Cancel</button>
                                                        <button onClick={() => {
                                                            cancelCryptoPayment();
                                                            setBankPay();
                                                        }}>Pay With Bank Transfer</button>

                                                    </div>


                                                </div>)}

                                        </div>
                                    </div>
                                )
                                //   ===============================================Bank Payment Codes End
                                :


                                //   ===============================================Bank Payment Codes start
                                (
                                    <div>
                                        <div>
                                            {
                                                showLoading ? (
                                                    <div className='loadingpage' >
                                                        <h1>...Loading Bank Payment</h1>
                                                    </div>
                                                )

                                                    :

                                                    (

                                                        <div className='paydetail' >
                                                            <h1>Bank Details</h1>
                                                            <div>
                                                                <p><b>Bank Name:</b>XXXXXXXXXX</p>
                                                                <p><b>Account Number:</b>XXXXXXXXXX</p>
                                                            </div>

                                                            <label>
                                                                <input
                                                                    type="checkbox"
                                                                    checked={bankPaid}
                                                                    onChange={handleBankPaymentCheckbox}
                                                                />
                                                                I have made payment
                                                            </label>
                                                            {bankPaid ? (
                                                                <div className='uploadcontrols'>
                                                                    <button onClick={handleBankUploadButton} className='uploadbutton'>Upload Reciept</button>
                                                                    <input
                                                                        type="file"
                                                                        ref={BankScreenShotInputRef}
                                                                        accept=".jpg, .jpeg, .png, .gif"
                                                                        style={{ display: 'none' }}
                                                                        onChange={handleBankScreenShotUpload}
                                                                    />
                                                                </div>) : (<h1>please confirm payment: {formatTime(bankPayRemainingTime)}</h1>)}

                                                            <div className='pay-controls'>
                                                                <button onClick={cancelBankPayment}>Cancel</button>
                                                                <button onClick={() => {
                                                                    cancelBankPayment()
                                                                    setCryptoPay()
                                                                }}>Pay With Bitcoin</button>

                                                            </div>
                                                        </div>


                                                    )}

                                        </div>
                                    </div>
                                )
                            //   ===============================================Bank Payment Codes End
                        }
                    </div>
                ) : (
                    <div className='payOptNotSelected'>
                        <div>
                            <h2>Payer Details:</h2>
                            <div>
                                <p><b>Name: </b>{props.payerdetails.firstName} {props.payerdetails.lastName}</p>
                                <p><b>Email: </b>{props.payerdetails.email}</p>
                                <p><b>Payable for: </b>{props.paymentFor}</p>
                                <p><b>Payable Amount: </b>{props.amount}</p>
                            </div>
                        </div>
                        <h1> Please select an option</h1>
                    </div>
                )}

            </div>



        </div>
    )
}
