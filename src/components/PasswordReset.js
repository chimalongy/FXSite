import React, { useState } from 'react';
import dataFetch from "./modules/dataFetch";
export default function PasswordReset(props) {
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
        const fData = new FormData();
        fData.append('email', email);
        fData.append('forgotPassword', "yes");
        console.log(fData.entries);
  
        const url = "http://localhost/MusaFX/engine.php";
        dataFetch(url, fData)
          .then(data => {
            if (data == "sucessful") {
             
         /// NAVIGATE HERE TO THE LOGIN PAGE
  
            }
          })
          .catch(error => {
            console.error(error);
          });
      }
    };
  return (
    <div>
    <h2 style={{textAlign:"center"}}>RESET YOUR PASSWORD</h2>
    <p>We will send you an email to reset your password.</p>
    <form onSubmit={handleResetPassword}>
      <div>
        
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <span className="error">{emailError}</span>
      </div>
      <button type="submit">Submit</button>
    </form>
    <p style={{textAlign:"center"}}>
      <a  href="#" onClick={props.showLogin}>Cancel</a>
    </p>
  </div>
  )
}
