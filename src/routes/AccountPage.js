import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Loginform from '../components/Loginform'
import RegistrationForm from '../components/RegistrationForm'
import PasswordReset from '../components/PasswordReset'
import "../styles/AccountPage.css"


export default function AccountPage() {
  let [showLogin, setShowLogin] = useState(true)
  let [showForgottenPassword, setShowForgottenPassword] = useState(false)
  

  function handletoogle() {
    setShowLogin(!showLogin);
  }
  return (
    <div className='account-page'>
      <div className='accountpage-container'>
        <button onClick={handletoogle}>toogle</button>

        {showLogin ?
          (<div>
            {showForgottenPassword ? (<div><PasswordReset showLogin={() => { setShowForgottenPassword(false) }} /></div>) : (<div><Loginform showReset={() => { setShowForgottenPassword(true) }} showCreatAccount={() => { setShowLogin(false) }} /></div>)}
          </div>
          )
          :
          (
            <div>
              <RegistrationForm showLogin={() => { setShowLogin(true) }} />
            </div>
          )}
          <button style={{width:"150px",margin:"auto"}}><Link to="/">Back to Store</Link></button>
      </div>
    </div>
  )
}
