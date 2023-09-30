import React, { useState, useRef } from 'react';
import dataFetch from "./modules/dataFetch";
const RegistrationForm = (props) => {

  let [formValid, setFormValid] = useState(false);
  let [generatedCode, setGeneratedCode] = useState("");
  const [responseData, setResponseData] = useState(null);
  const [showRegForm, setShowRegForm] = useState(true)



  function generateRandomCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      code += characters.charAt(randomIndex);
    }
    return (code)
  }
  const [formData, setFormData] = useState({
    firstName: 'Chimaobi',
    lastName: 'Olegeme',
    email: 'me.chimaobi@gmail.com',
    password: 'chimsyboy',
    confirmpassword: 'chimsyboy',
    verificationcode: ''
  });

  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    verificationcode: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmpassword: ''
    };


    if (formData.firstName.trim() === '') {
      newErrors.firstName = 'First name is required';
      valid = false;
    }

    if (formData.lastName.trim() === '') {
      newErrors.lastName = 'Last name is required';
      valid = false;
    }

    if (!formData.email.match(/^\S+@\S+\.\S+$/)) {
      newErrors.email = 'Invalid email format';
      valid = false;
    }

    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
      valid = false;
    }
    if (formData.confirmpassword != formData.password) {
      newErrors.password = 'Passwords do not match';
      valid = false;
    }

    const fData = new FormData();
    fData.append('email', formData.email);
    fData.append('emailCheck', 'yes');
    const url = "http://localhost/MusaFX/engine.php";
    dataFetch(url, fData)
      .then(data => {
        if (data == "userexist") {
          alert("This email is registered")
          valid = false;
        }

        else {
          let code = generateRandomCode();
          formData.verificationcode = generatedCode;
          setFormValid(valid);
          setGeneratedCode(code)
          const fData = new FormData();
          fData.append('name', formData.firstName);
          fData.append('email', formData.email);
          fData.append('code', code);
          fData.append('sendRegistrationCode', "yes");
          console.log(fData.entries);

          const url = "http://localhost/MusaFX/engine.php";
          dataFetch(url, fData)
            .then((data) => console.log("this is the data: ", data))
            .catch((error) => {
              console.error(error); // Handle any errors that may occur
            });
        }
      })
      .catch(error => {
        console.error(error);
      });




    setFormErrors(newErrors);

  };

  let verifyform = (e) => {
    e.preventDefault();
    let result=false;
    const newErrors = {
      verificationcode: ''
    };

    if (formData.verificationcode != generatedCode) {
      newErrors.verificationcode = 'Wrong verification code';
    }
    else {
   
      const fData = new FormData();
      fData.append('firstname', formData.firstName);
      fData.append('lastname', formData.lastName);
      fData.append('email', formData.email);
      fData.append('password', formData.password);
      fData.append('registerNewUser', "yes");
      console.log(fData.entries);
      

      const url = "http://localhost/MusaFX/engine.php";
      dataFetch(url, fData)
        .then(data => {
          if (data == "sucessful") {
           result=true
          }
        })
        .catch(error => {
          console.error(error);
        });
    }

    if (result=true){
      alert("Registration Successfull")
      props.showLogin()
    }
    setFormErrors(newErrors);

   


  }



  return (
    <div>
      
      {showRegForm?(<div>
        <h2 style={{ textAlign: "center" }}>CREATE AN ACCOUNT</h2>
        <form onSubmit={verifyform}>
          <div>

            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder='First Name'
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
            <span className="error">{formErrors.firstName}</span>
          </div>
          <div>

            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder='Last Name'
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
            <span className="error">{formErrors.lastName}</span>
          </div>
          <div>

            <input
              type="email"
              id="email"
              name="email"
              placeholder='Email'
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <span className="error">{formErrors.email}</span>
          </div>
          <div>

            <input
              type="password"
              id="password"
              name="password"
              placeholder='Password'
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <span className="error">{formErrors.password}</span>
          </div>
          <div>
            <input
              type="password"
              id="confirmpassword"
              name="confirmpassword"
              placeholder='Confirm Password'
              value={formData.confirmpassword}
              onChange={handleInputChange}
              required
            />
            <span className="error">{formErrors.password}</span>
          </div>
          <button onClick={validateForm} type="button">Continue</button>

          <div>{formValid ? (<div>
            <p>A verification code has been sent to your email.<br /> Please check your email</p>
            <div>
              <input
                type="text"
                id="verificationcode"
                name="verificationcode"
                placeholder='verifcation code'
                value={formData.verificationcode}
                onChange={handleInputChange}
                required
              />
              <span className="error">{formErrors.verificationcode}</span>
            </div>
            <p>{generatedCode}</p>
            <button onClick={verifyform} type="button">Verify</button>
          </div>) : ""}</div>
        </form>
      
      </div>) : 
      
      <div>
        <h1>Registration sucessful. Please Login</h1>
        </div>
      
      }
        
      <p style={{ textAlign: "center" }} onClick={props.showLogin}><a>Login</a></p>
    </div>
  );
};

export default RegistrationForm;
