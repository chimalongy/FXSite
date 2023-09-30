

import React, { useState } from 'react';
import "../styles/Footer.css"


function Footer() {


    // ----------------------------------------------NEWSLETTER FORM START
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleEmailChange = (event) => {
        const { value } = event.target;
        setEmail(value);
    };

    const validateEmail = () => {
        if (!email.match(/^\S+@\S+\.\S+$/)) {
            setEmailError('Invalid email format');
            return false;
        }
        setEmailError('');
        return true;
    };

    const handleResetPassword = (event) => {
        event.preventDefault();

        if (validateEmail()) {
            console.log('Email to reset password:', email);
            // You can perform further actions here, such as sending a password reset email
        }
    };
    //...............................NEWS LETTER FORM ENDING  


    return (
        <div className='Footer'>
        <div className='footer-container'>
        <div className='layer1'>
                <div>
                    <h3>Links</h3>
                    <ul className='footer-links'>
                        <li>Privacy policy</li>
                        <li>Refund Policy</li>
                        <li>Terms and conditions</li>
                        <li>Renews</li>
                        <li>Support</li>
                    </ul>

                </div>
                <div>
                    <h3>Get Connected</h3>
                    <ul className='socials'>
                        <li><i className="fa-brands fa-instagram icon"></i></li>
                        <li><i className="fa-brands fa-square-youtube icon"></i></li>
                        <li><i className="fa-brands fa-tiktok icon"></i></li>
                    </ul>
                </div>


                <div>
                    <h3>New Letter</h3>
                    <form onSubmit={handleResetPassword}>
                        <div>

                            <input
                                type="email"
                                id="email"
                                placeholder="email@example.com"
                                value={email}
                                onChange={handleEmailChange}
                                required
                            />
                            <span className="error">{emailError}</span>
                        </div>
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className='layer2'>
                <p><span>instagram :</span> @good_relaxation / @fxsniper24 </p>
                <p><span>Phone number:</span> +27605076948</p>
                <p> <span>Email:</span> info@fxsniper24.com</p>
            </div>
            <div className='layer3'>
                <p className='risk-warning'>Risk Warning: Trading leveraged products such as Forex may not be suitable for all investors as they carry a degree of risk to your capital. You must be aware of the risks and be willing to bear any level of risk to invest in financial markets. Past performance is not indicative of future results. FXSNIPER24 and all individuals associated assume no responsibility for your trading results or investments.
                    Please ensure that you fully understand the risks involved.</p>

                <p><a>© 2023, FXSNIPER24</a>|<a>All rights reserved</a></p>
            </div>
        </div>



        </div>
    )
}

export default Footer