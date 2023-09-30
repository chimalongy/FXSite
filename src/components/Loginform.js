import React, { useState } from 'react';
import dataFetch from "./modules/dataFetch";
import { login } from '../redux/user';
import { generallogin } from '../redux/generalLoginCheck';
import { useDispatch} from 'react-redux'
import LogComponent from './LogComponent';


const Loginform = (props) => {
const dispatch = useDispatch();
 const [LoginErrorMessage, setLoginErrorMessage]=useState("");
  const [formData, setFormData] = useState({
    email: 'me.chimaobi@gmail.com',
    password: 'chimsyboy'
  });

  const [formErrors, setFormErrors] = useState({
    email: '',
    password: ''
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
      email: '',
      password: ''
    };

    if (!formData.email.match(/^\S+@\S+\.\S+$/)) {
      newErrors.email = 'Invalid email format';
      valid = false;
    }

    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
      valid = false;
    }

    setFormErrors(newErrors);
    return valid;
  };

  const handleLogin = (event) => {
    event.preventDefault();

    if (validateForm()) {
     // console.log('Login data:', formData);
      // You can perform further actions here, such as sending the data to a server
      let fData=new FormData();
      fData.append("email",formData.email);
      fData.append("password",formData.password);
      fData.append("login","yes");

      const url = "http://localhost/MusaFX/engine.php";
        dataFetch(url, fData)
          .then(data => {

            
            if (data == "userdoesnotexist") {
              setLoginErrorMessage("Email not registered. Please create and account");
            }
            else if (data == "incorrectpassword") {
              setLoginErrorMessage("Hi, your password is incorrect");
            }
            else{
           let userData=JSON.parse(data);
                  // console.log(data)
              dispatch(
                login(
                  {

                    firstName: userData[0],
                    lastName: userData[1],
                    email: userData[2],
                    password: userData[3],
                    investmentDate: userData[4],
                    investmentPlan: userData[5],
                    investmentEnabled: userData[6],
                    investmentAmount: userData[7],
                    totalProfit: userData[8],
                    withdrawalableAmount: userData[9],
                    accountBalance: userData[10],

                  }
                )
               )
               dispatch(generallogin());
            }
           
          })
          .catch(error => {
            console.error(error);
          });


    }
  };

  return (
    <div style={{}}>
      <h2 style={{textAlign:"center"}}>Login</h2>

        <p>{LoginErrorMessage}</p>

      <form onSubmit={handleLogin}>
        <div>
         
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
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
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <span className="error">{formErrors.password}</span>
        </div>
        <button type="submit">Sign in</button>
      </form>
      <div>
        <p style={{textAlign:"center"}} onClick={props.showReset}><a>Forgot Password?</a></p>
      </div>
      <div>
      <p style={{textAlign:"center"}} onClick={props.showCreatAccount}><a>Create an Account</a></p>
        
      </div>
    
    </div>
  );
};

export default Loginform;
