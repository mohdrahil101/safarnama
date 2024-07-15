import React from 'react';
import bg from '../../Assets/bg.mp4';
import './about.css';



const About = () =>{
    return(
        <section className="about">
            <div className="aboutVideo">
                <video src={bg} muted loop autoPlay></video>
            </div>

            <div className="aboutBox">
                This website is developed by Mohd. Rahil using React JS and Tailwind CSS.
            </div>
        </section>
    )
}

export default About;