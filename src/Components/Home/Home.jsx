import React, {useEffect} from "react";
import './home.css'
import video from '../../Assets/bg.mp4'
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () =>{
    useEffect(()=>{
        Aos.init({duration: 1000})
    }, [])
    return(
        <section className="home">
            <div className="overlay"></div>
            <video src={video} muted autoPlay loop></video>

            <div className="homeContent container">

                <div className="textDiv">
                    <span data-aos="fade-up" className="smallText">travel made easy!</span>
                    <h1 data-aos="fade-up" className="homeTitle">Select a Package</h1>
                </div>

                <div data-aos="fade-up" className="cardDiv grid">
                    <div className="destinationInput">
                        <label htmlFor="city">Search:</label>
                        <div className="input flex">
                            <input type="text" placeholder="Enter location" />
                            <GrLocation className="icon"/>
                        </div>
                    </div>
                    <div className="dateInput">
                        <label htmlFor="date">Select a date:</label>
                        <div className="input flex">
                            <input type="date"/>
                        </div>
                    </div>
                    <div className="priceInput">
                        <div className="label_total flex">
                            <label htmlFor="price">Max price:</label>
                            <h3 className="total">$1000</h3>
                        </div>
                        <div className="input flex">
                            <input type="range" max="1000" min="100"/>
                        </div>
                    </div>

                    <div className="searchOptions flex">
                        <HiFilter className="icon" />
                        <span>More Filters</span>
                    </div>                    
                </div>

            </div>
        </section>
    )
} 

export default Home