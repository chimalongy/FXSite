import React from 'react'
import { useState } from 'react';
import "../styles/DashBoardSettingsTab.css"
import dataFetch from "./modules/dataFetch";
import { useSelector } from 'react-redux';

function DashBoardSettingsTab() {
    const user = useSelector((state) => state.user.value);
    const [changesMade, setChangesMade]= useState(false)
    const [formData, setFormData] = useState({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        country: user.ctry ,
        state: user.st,
        address: user.addr,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setChangesMade(true);
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle the form submission here with the formData state
        alert(formData)
        const fData = new FormData();
        fData.append('email', user.email);
        fData.append('country', formData.country);
        fData.append('state', formData.state);
        fData.append('address', formData.address);
        fData.append('updateUserData', 'yes');
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
    };
    return (
        <div className='formContainer'>
            <h1>Contact Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        disabled="disabled"
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        disabled="disabled"
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        disabled="disabled"
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="country">Country:</label>
                    <input
                        type="text"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="state">State:</label>
                    <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="address">Address:</label>
                    <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        rows="4"
                        cols="50"
                    />
                </div>
                <button type="submit" disabled={changesMade?"":"disabled"} >Update</button>
            </form>
        </div>



    )
}

export default DashBoardSettingsTab