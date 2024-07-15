import React from 'react'
import './contact.css'
import bg from '../../Assets/bg.mp4'
import { FiSend } from "react-icons/fi";

const Contact = () =>{
    return(
        <div className="contact">
            <div className="contactVideo">
                <video src={bg} loop autoPlay muted></video>
            </div>

            <div className="contactBox">
                <input type="text" placeholder='Enter your name'/>
                <input type="email" placeholder='Enter your email' />
                <input type="number" placeholder='Enter your number' />

                <button className='btn flex' type='submit'>
                Send<FiSend className="icon" />
                </button>
            </div>
        </div>
    ) 
}

export default Contact;