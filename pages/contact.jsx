import Head from 'next/head';
import React, {useState, useRef} from 'react';
import FormInput from '../Components/FormInput';
import emailjs from '@emailjs/browser';

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
      placeHolder: "full name",
      errorMessage: "Fullname should be 3-16 characters and shouldn't incude any special characters",
      label: "Full name",
      pattern: "^(?=.{3,16}$)[a-zA-Z]+(?: [a-zA-Z]+)?$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeHolder: "Email",
      errorMessage: "It should be a valid email address",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "subject",
      type: "text",
      placeHolder: "Subject",
      errorMessage: "Subject should be 3-16 characters ",
      label: "Subject",
      required: true,
    },
    {
      id: 4,
      name: "message",
      type: "text",
      placeHolder: "Message",
      label: "Message",
      required: false,
    },
  ]

  //handling change of state
  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value })
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
    <div>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="contactContainer">
        <h1>Contact Us</h1>
          <form ref={form} onSubmit={sendEmail} >
            {inputs.map(input =>(
              <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
            ))}
            <button className='btn'>Sumbit</button>
          </form>
      </div>
    </div>
  )
}

export default Contact