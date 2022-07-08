import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './about.css';

const About = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_mckeb5e', 'template_1jn8vhg', form.current, 'MEw4EmLVTmkXg_AT5')
        .then((result)=>{
            console.log(result.text);
            console.log('Message sent');
            e.target.reset();
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    return (
        <div className='contact'>
            <form ref={form} onSubmit={sendEmail}>
                <label htmlFor='user_name'>Name</label>
                <input type="text" name="user_name" id="user_name" className='aboutInputField'/>
                <label>Email</label>
                <input type="email" name="user_email" className='aboutInputField' />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" className="aboutButton" />
            </form>
        </div>
    );
};

export default About;