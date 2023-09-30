import React, { useState } from 'react'
import "../styles/DashboardWithdrawal.css";
import { useSelector } from 'react-redux';


export default function DashboardWithdrawal() {
    const user = useSelector((state) => state.user.value);
    const [formData, setFormData] = useState({
        bankname: '',
        accountnumber: '',
        amount: '',
    });

    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    const validateForm = () => {
        const newErrors = {};

        // Bank Name validation
        if (!formData.bankname) {
            newErrors.bankname = 'Bank Name is required';
        }

        // Account Number validation
        if (!formData.accountnumber) {
            newErrors.accountnumber = 'Account Number is required';
        } else if (!/^\d{10}$/.test(formData.accountnumber)) {
            newErrors.accountnumber = 'Account Number must be 10 digits';
        }

        // Amount validation
        if (!formData.amount) {
            newErrors.amount = 'Amount is required';
        } else if (!/^\d+(\.\d{1,2})?$/.test(formData.amount)) {
            newErrors.amount = 'Invalid Amount format';
        }

        setErrors(newErrors);
        setIsFormValid(Object.keys(newErrors).length === 0);
    };


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        // Validate the field when it changes
        validateForm();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit the form data if it's valid
        if (isFormValid) {
            // Your submission logic here
            console.log('Form data submitted:', formData);
            alert("details accepted")
        } else {
            console.log('Form is not valid. Please check the errors.');
        }
    };

    return (
        <div className='withdrawals'>
            {user.investmentEnabled == "TRUE" ? (
                <div>
                    {user.withdrawalableAmount > 0 ? (
                        <div>
                            <h1>Add your Bank Details</h1>
                            <i className="fa-solid fa-building-columns"></i>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="bankname">Bank Name</label>
                                    <input
                                        type="text"
                                        id="bankname"
                                        name="bankname"
                                        value={formData.bankname}
                                        onChange={handleInputChange}
                                    />
                                    {errors.bankname && <p className="error">{errors.bankname}</p>}
                                </div>
                                <div>
                                    <label htmlFor="accountnumber">Account Number</label>
                                    <input
                                        type="text"
                                        id="accountnumber"
                                        name="accountnumber"
                                        value={formData.accountnumber}
                                        onChange={handleInputChange}
                                    />
                                    {errors.accountnumber && <p className="error">{errors.accountnumber}</p>}
                                </div>
                                <div>
                                    <label htmlFor="amount">Amount</label>
                                    <input
                                        type="text"
                                        id="amount"
                                        name="amount"
                                        value={formData.amount}
                                        onChange={handleInputChange}
                                    />
                                    {errors.amount && <p className="error">{errors.amount}</p>}
                                </div>
                                <button type="submit" disabled={!isFormValid}>
                                    Submit
                                </button>
                            </form>

                        </div>

                    ) : (
                        <div className='no-investments'>

                            <i class="fa-solid fa-cloud-arrow-down icon"></i>
                            <h1>Withdrawal not due</h1>
                            <p>{"(pending)"}</p>

                        </div>

                    )}
                </div>
            ) :


                (
                    <div className='no-investments'>

                        <i className="fa-regular fa-hourglass icon"></i>
                        <h1>You have not made any investments</h1>

                    </div>
                )}
        </div>
    );
}
