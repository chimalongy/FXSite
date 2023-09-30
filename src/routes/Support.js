import React, { useState } from 'react';
import "../styles/Support.css"
import Footer from "../components/Footer";

export default function Support() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    body: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    body: '',
  });

  const validateForm = () => {
    const newErrors = { ...errors };
    let isValid = true;

    if (!formData.name) {
      newErrors.name = 'Name is required';
      isValid = false;
    } else {
      newErrors.name = '';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    } else {
      newErrors.email = '';
    }

    if (!formData.subject) {
      newErrors.subject = 'Subject is required';
      isValid = false;
    } else {
      newErrors.subject = '';
    }

    if (!formData.body) {
      newErrors.body = 'Body is required';
      isValid = false;
    } else {
      newErrors.body = '';
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      // You can perform your form submission here
      console.log('Form data:', formData);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  return (
    <div className='support'>
        <h1>Contact information</h1>
        <ul>
            <li><b>Trade name:</b> FXSNIPER24</li>
            <li><b>Phone number:</b> +27605076948</li>
            <li><b>Email:</b> info@fxsniper24.com</li>
            <li><b>instagram:</b> @good_relaxation or @fxsniper24 </li>
        </ul>

        <h2>Send us a message</h2>
      <form onSubmit={handleSubmit} className='contact-form'>
        <div>
          
          <input
          placeholder='name'
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <span className="error">{errors.name}</span>
        </div>
        <div>
          
          <input
          placeholder='email'
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <span className="error">{errors.email}</span>
        </div>
        <div>
          
          <input
          placeholder='subject'
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
          />
          <span className="error">{errors.subject}</span>
        </div>
        <div>
          
          <textarea
          placeholder='message'
            name="body"
            value={formData.body}
            onChange={handleInputChange}
            rows={8}
          />
          <span className="error">{errors.body}</span>
        </div>
        <button type="submit">Submit</button>
      </form>
    <Footer/>
    </div>
  )
}
