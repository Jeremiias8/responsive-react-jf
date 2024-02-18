import React, { useContext, useRef, useState } from 'react'
import './Contact.css'

import emailjs from '@emailjs/browser';

import { themeContext } from '../../Context'

export const Contact = () => {

    const form = useRef();

    const [done, setDone] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_3uq8uvd', 'template_l4cpxqj', form.current, 'YOUR_USER_ID')
        .then((result) => {
            console.log(result.text);
            setDone(true);

        }, (error) => {
            console.log(error.text);
        });

        if (window.confirm("Your message has been sent!")) {

            const form = document.getElementById("form-contact");
            form.reset();
        }
    }

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className="contact-form">
        <div className="w-left">

            <div className="awesome">
                <span style={{ color: darkMode ? 'white' : '' }}>Get in touch</span>
                <span>Contact me</span>

                <div className="blur s-blur1"
                    style={{ background: "#ABF1FF94" }}
                ></div>
            </div>

        </div>

        <div className="c-right">
            <form ref={form} onSubmit={sendEmail} id='form-contact'> 

                <input type="text" name='user_name' 
                className="user" placeholder='Name' />
                <input type="email" name='user_email' 
                className="user" placeholder='...@.com' />
                <textarea name='message' 
                className='user' placeholder='Message'>
                </textarea>

                <input type="submit" value="Send" className="button" />

                <div>
                    {done && 
                        <span><h1>Thanks for contacting me !</h1></span>
                    }
                </div>

                <div className="blur c-blur1"
                    style={{ background: 'var(--purple)' }}
                >
                </div>

            </form>
        </div>
    </div>
  )

}
