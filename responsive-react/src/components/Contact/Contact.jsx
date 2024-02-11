import React, { useRef } from 'react'
import './Contact.css'

import emailjs from 'emailjs';

export const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_3uq8uvd', 'template_l4cpxqj', form.current, 'YOUR_USER_ID')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        if (window.confirm("Your message has been sent!")) {

            const form = document.getElementById("contact-form");
            form.reset();
        }
    }

  return (
    <div className="contact-form">
        <div className="w-left">

            <div className="awesome">
                <span>Get in touch</span>
                <span>Contact me</span>

                <div className="blur s-blur1"
                    style={{ background: "#ABF1FF94" }}
                ></div>
            </div>

        </div>

        <div className="c-right">
            <form>

                <input type="text" name='user_name' 
                className="user" placeholder='Name' />
                <input type="email" name='user_email' 
                className="user" placeholder='...@.com' />
                <textarea name='message' 
                className='user' placeholder='Message'>
                </textarea>

                <input type="submit" value="Send" className="button" />

                <div className="blur c-blur1"
                    style={{ background: 'var(--purple)' }}
                >
                </div>

            </form>
        </div>
    </div>
  )

}
