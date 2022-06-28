import React, { useState, useRef } from 'react';
import FormInput from './FormInput';
import emailjs from '@emailjs/browser';
import Image from 'next/image';

const Contact = () => {

  //an object as a state for handling our multiple inputs.
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: ""
  });

  // our inputs array that we map.
  const inputs = [
    {
      id: 1,
      name: "fullname",
      type: "text",
      placeholder: "full name",
      errorMessage: "Fullname should be 3-16 characters and shouldn't incude any special characters",
      label: "Full name",
      pattern: "^(?=.{3,16}$)[a-zA-Z]+(?: [a-zA-Z]+)?$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "subject",
      type: "text",
      placeholder: "Subject",
      errorMessage: "Subject should be 3-16 characters ",
      label: "Subject",
      required: true,
    },
    {
      id: 4,
      name: "message",
      type: "text",
      placeholder: "Message",
      label: "Message",
      required: false,
    },
  ]

  //handling change of state
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yo5as5p', 'template_wcdey5i', form.current, 'YmIJnqzWMW_yPL-pa')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="contactContainer" id="contact">
      <h1>Contact Us</h1>
      <div className="mContainer">

        <div className="left">
          <form ref={form} onSubmit={sendEmail} data-aos="fade-right">
            {inputs.map(input => (
              <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
            ))}
            <button className='btn'>Sumbit</button>
          </form>
        </div>

        <div className="right">
          <Image 
            data-aos="fade-left"
            data-aos-offset="300"  
            src="/pictures/contact.png" 
            layout='fill' 
            objectFit='contain' 
            priority
          />
        </div>

      </div>

    </div>
  )
}

export default Contact