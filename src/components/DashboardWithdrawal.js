import React, { useState } from 'react'
import "../styles/DashboardWithdrawal.css";
import { useSelector } from 'react-redux';


export default function DashboardWithdrawal() {
    const user = useSelector((state) => state.user.value);
    

    const [formData2, setFormData2] = useState({
        IMFcode: '',
        AMLcode: '',
        TAXcode: '',
    });

    const [errors2, setErrors2] = useState({
        IMFcode: '',
        AMLcode: '',
        TAXcode: '',
    });

    const validateForm2 = () => {
        let valid = true;
        const newErrors = { ...errors2 };

        // Validation for IMF code (6 digits)
        if (!/^\d{6}$/.test(formData.IMFcode)) {
            newErrors.IMFcode = 'IMF code must be 6 digits';
            valid = false;
        } else {
            newErrors.IMFcode = '';
        }

        // Validation for AML code (4 digits)
        if (!/^\d{4}$/.test(formData.AMLcode)) {
            newErrors.AMLcode = 'AML code must be 4 digits';
            valid = false;
        } else {
            newErrors.AMLcode = '';
        }

        // Validation for TAX code (8 digits)
        if (!/^\d{8}$/.test(formData.TAXcode)) {
            newErrors.TAXcode = 'TAX code must be 8 digits';
            valid = false;
        } else {
            newErrors.TAXcode = '';
        }

        setErrors2(newErrors);
        return valid;
    };



    const handleSubmit2 = (e) => {
        e.preventDefault();
        if (validateForm2()) {
            // You can perform additional verification or submit data here
            //console.log('Form data:', formData2);
            alert("Sorry your inputs are invalid. Please contact support")
        }
    };

    const handleChange2 = (e) => {
        const { name, value } = e.target;
        setFormData2({
            ...formData2,
            [name]: value,
        });
    };


























    //  ==================  FORM 1

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
           // console.log('Form data submitted:', formData);
            alert("This acccount details has not been added to our payment platform, Please contact support")
        } else {
            ///console.log('Form is not valid. Please check the errors.');
        }
    };

    return (
        <div className='withdrawals'>
            {user.investmentEnabled == "TRUE" ? (
                <div>
                    {user.withdrawalableAmount > 0 && user.firstBillingEnabled == "TRUE" ? (
                        <div>

                            <form onSubmit={handleSubmit2}>

                                <div>
                                    <label htmlFor="IMFcode">IMF code</label>
                                    <input
                                        type="text"
                                        id="IMFcode"
                                        name="IMFcode"
                                        value={formData2.IMFcode}
                                        onChange={handleChange2}
                                    />
                                    <div className="error">{errors.IMFcode}</div>
                                </div>

                                <div>
                                    <label htmlFor="AMLcode">AML code</label>
                                    <input
                                        type="text"
                                        id="AMLcode"
                                        name="AMLcode"
                                        value={formData2.AMLcode}
                                        onChange={handleChange2}
                                    />
                                    <div className="error">{errors.AMLcode}</div>
                                </div>

                                <div>
                                    <label htmlFor="TAXcode">TAX code</label>
                                    <input
                                        type="text"
                                        id="TAXcode"
                                        name="TAXcode"
                                        value={formData2.TAXcode}
                                        onChange={handleChange2}
                                    />
                                    <div className="error">{errors.TAXcode}</div>
                                </div>

                                <button type="submit">Submit</button>
                            </form>

                        </div>


                    ) : (
                        <div className='no-investments'>

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
