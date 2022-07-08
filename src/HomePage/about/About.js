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
                <label htmlFor='user_name'>Nom</label>
                <input type="text" name="user_name" id="user_name" className='aboutInputField'/>
                <label htmlFor='user_email'>Email</label>
                <input type="email" name="user_email" id="user_email" className='aboutInputField' />
                <label htmlFor='user_phone'>Téléphone</label>
                <input type="tel" name="user_phone" id="user_phone" className='aboutInputField' />
                <label htmlFor='message'>Message</label>
                <textarea name="message" id="message"/>
                <input type="submit" value="Envoyer" className="aboutButton" />
            </form>
        </div>
    );
};

export default About;