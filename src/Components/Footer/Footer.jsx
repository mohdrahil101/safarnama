import React, {useEffect} from "react";
import './footer.css'
import bg from '../../Assets/bg.mp4'
import { FiSend } from "react-icons/fi";
import { MdModeOfTravel } from "react-icons/md";
import { TiSocialFacebook } from "react-icons/ti";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiChevronRight } from "react-icons/fi";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () =>{
    return(
        <section className="footer">
            <div className="videoDiv">
                <video src={bg} loop autoPlay muted></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small>Keep in touch</small>
                        <h2>Travel with us</h2>
                    </div>

                    <div data-aos="fade-up" className="inputDiv flex">
                        <input type="text" placeholder="Enter email" />
                        <button className="btn flex" type="submit">
                            Send<FiSend className="icon" />
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div data-aos="fade-up" className="logoDiv">
                            <a href="#" className="logo flex">
                            <MdModeOfTravel className="icon"/>safarnama
                            </a>
                        </div>

                        <div data-aos="fade-up" className="footerParagraph">
                        With a passion for exploration, safarnama curates unforgettable travel experiences tailored to every adventurer’s dream.
                        </div>

                        <div data-aos="fade-up" className="footerSocials flex">
                            <TiSocialFacebook className="icon"/>
                            <AiFillInstagram className="icon"/>
                            <FaYoutube className="icon"/>
                            <FaXTwitter className="icon"/>
                        </div>
                    </div>

                    <div className="footerLinks grid">

                        <div data-aos="fade-up" className="linkGroup">
                            <span className="groupTitle">
                                Our Services
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>Ticket
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>Agency
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>Payment
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>Tourism
                            </li>
                        </div>
                        <div data-aos="fade-up" className="linkGroup">
                            <span className="groupTitle">
                                Partners
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>TripAdvisor
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>OYO Hotels
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>Trivago
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>RentCars
                            </li>
                        </div>
                    </div>

                    <div className="footerDiv flex">
                        <small>Copyright © 2024 safarnama | All Rights Reserved.</small>
                        <small>Website Developed by: Mohd. Rahil</small>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Footer