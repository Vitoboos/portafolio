import React from 'react'
import { useRef } from 'react'
import styles from './Message.module.css'
import emailjs from '@emailjs/browser';

export default function Message(props) {

    const form = useRef()
        
    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_ibhbmmp', 'template_ue7lh9q', form.current, 'apTGqqKPsVZ6KX1o7')
            .then((result) => {
            console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
        };

return (

    <div className={styles.msgBox}  id='msgBox'>

        <h1 className={styles.title}> {props.title} </h1>

        <form ref={form} onSubmit={sendEmail}>  
            <div className={styles.form}>
                <input name='user_email' placeholder="Email" required type='email'/> 
                <input name='subject' placeholder="Subject" required type='text'/> 
                <input name = 'user_name' placeholder='Name' required type='text' className={styles.name}/>
                <textarea name='message'  placeholder='...' required/>
                <button type='submit' > {props.btn} </button>
            </div>
        </form>

    </div>

)
}
