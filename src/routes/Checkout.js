import React, { useState, useEffect, useRef } from 'react'; // Import useState
import "../styles/Checkout.css"
import Cart from '../components/Cart'
import { CountryData } from "../components/utils.js"
import Payment from '../components/Payment';
import { useSelector } from 'react-redux';
export default function Checkout() {



  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedStates, setSelectedStates] = useState([]);
  const [showCheckOutForm, setshowCheckOutForm] = useState(true);



  //=========================================================================================
  let cartList = []


  const generalLoginCheck = useSelector((state) => state.generalLoginCheck.logedIn);
  const user = useSelector((state) => state.user.value);
  const selectedPlan = useSelector((state) => state.selectedPlan.selectedPlan);
  const [min, setMin]=useState(0)
  const [max, setMax]=useState(0)
  const [amount, setAmount]= useState(0);
  const [paymentAmoutError, setPaymentAmountError]=useState("");

  function validateAmount(amount, plan){
    let returnValue= false;
    switch (plan) {
      case "basic":
        if ((amount>200)&&(amount<999)){returnValue=true}
      
        break;
      case "professional":
        if ((amount>1000)&&(amount<4999)){returnValue=true}
      
        break;
      case "gold":
        if ((amount>5000)&&(amount<9999)){returnValue=true}
       
        break;
      case "diamond":
        if ((amount>10000)&&(amount<25000)){returnValue=true}
       
        break;
      default:
       
    }
    
    return returnValue;
  }

  useEffect(() => {
    if (generalLoginCheck){
      switch (selectedPlan) {
        case "basic":
          setMin(200);
          setMax(999);
          break;
        case "professional":
          setMin(1000);
          setMax(4999);
          break;
        case "gold":
          setMin(5000);
          setMax(10000);
          break;
        case "diamond":
          setMin(10000);
          setMax(25000);
          break;
        default:
          console.log("It's something else.");
      }
      

    }
    else{}


    
  }, []);

  

  // function Product(name, quantity, price, image) {
  //   this.name = name || "";
  //   this.quantity = quantity || 0;
  //   this.price = price || 0;
  //   this.image = image || "";
  // }

  // let autopilotpro = new Product();
  // autopilotpro.name = "AutoPilot Pro PLUS+(version w19)";
  // autopilotpro.price = 7499.99;
  // autopilotpro.quantity = 1;
  // autopilotpro.image = "../images/fximage.png";



  //pushing the product to the list

  //cartList.push(autopilotpro);
  // cartList.push(autopilotpro);

  const [errors, setErrors] = useState({}); // Use state to manage input validation errors
  const [formData, setFormData] = useState({ // Use state to manage form data
    firstName:'',
    lastName: '',
    email: '',
    country: '',
    state: '',
    city: '',
    address: '',
  });

  if (generalLoginCheck){
    formData.firstName = user.firstName;
    formData.lastName = user.lastName;
    formData.email= user.email;
  }


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCountryChange = (event) => {
    const selectedCountryName = event.target.value;
    const selectedCountryObject = CountryData.find(
      (country) => country.countryname === selectedCountryName
    );
    setSelectedCountry(selectedCountryName);
    setSelectedStates(selectedCountryObject?.states || []);
    setFormData(prevFormData => ({
      ...prevFormData,
      state: setSelectedStates[0], // Change this value programmatically
    }));
    // formData.state=selectedStates[0];
  };

  const validateInputs = () => {
    const newErrors = {};
    if (!formData.firstName) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.city) {
      newErrors.city = "City is required";
    }
    if (!formData.address) {
      newErrors.address = "Address is required";
    }
    if (!formData.state) {
      newErrors.state = "State/Province is required";
    }
    if (selectedCountry.length < 1) {
      newErrors.country = "Country is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateInputs();

    if (isValid) {
      // Continue with form submission or other actions
      //append country

      formData.country = selectedCountry;

      if (generalLoginCheck==true){

        let amountCheck=validateAmount(amount, selectedPlan)
        if (amountCheck){
          setshowCheckOutForm(false);
        }
        else{alert("invalid input for this plan")}


      }

      
      

     
     
     
      console.log(formData)
    }
  };

  return (
    <div className='checkout'>
      <h1>FXSNIPER24</h1>
      <p>{"Cart>Information>Payment"}</p>

      <div className='check-out-container'>

        <div className='checkout-left'>

          {showCheckOutForm ? (
            <div className='checkoutform-container'>
              <form onSubmit={handleSubmit}>
                <h2>Contact Information</h2>
                <input
                  type='text'
                  placeholder='First Name'
                  name='firstName'
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
                {errors.firstName && <p className="error">{errors.firstName}</p>}
                <input
                  type='text'
                  placeholder='Last Name'
                  name='lastName'
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
                {errors.lastName && <p className="error">{errors.lastName}</p>}
                <input
                  type='text'
                  placeholder='Email'
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && <p className="error">{errors.email}</p>}

                <h2>Billing Address</h2>
                <select
                  name="country"
                  value={selectedCountry}
                  onChange={handleCountryChange}
                >
                  <option disabled value="">Select Country/Region</option>
                  {CountryData.map((country) => (
                    <option key={country.countryname} value={country.countryname}>
                      {country.countryname}
                    </option>
                  ))}
                </select>
                {errors.country && <p className="error">{errors.country}</p>}


                <select
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                >
                  <option disabled value="">Select State/Province</option>
                  {selectedStates.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
                {errors.state && <p className="error">{errors.state}</p>}

                <input
                  type='text'
                  placeholder='City'
                  name='city'
                  value={formData.city}
                  onChange={handleInputChange}
                />
                {errors.city && <p className="error">{errors.city}</p>}
                <input
                  type='text'
                  placeholder='Address'
                  name='address'
                  value={formData.address}
                  onChange={handleInputChange}
                />
                {errors.address && <p className="error">{errors.address}</p>}

                <button type="submit">Continue to Payment</button>
              </form>

            </div>

          ) :
            (<div className='checkout-payment'>
              <Payment payerdetails={formData} amount={amount} paymentFor={selectedPlan} />
              <button onClick={() => {
                setshowCheckOutForm(true)
              }}>Review Payment Details</button>
            </div>)}

        </div>
        <div className='checkout-right'>
              {generalLoginCheck?(
                <Cart plan={selectedPlan} min={min} max={max} setAmount={setAmount} AmountErrorMessage={paymentAmoutError}/>
              ):
              
              ("")}
          
        </div>
      </div>
    </div>
  );
}
