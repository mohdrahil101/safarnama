import React, {useState} from "react";
import './navbar.css'
import { MdModeOfTravel } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";

const Navbar = () =>{
    const[active, setActive]=useState('navBar')

    const showNav = () =>{
        setActive('navBar activeNavbar')
    }
    const hideNav = () =>{
        setActive('navBar')
    }
    return(
        <section className="navbarSection">
            <header className="header flex">
                <div className="logoDiv">
                    <a href="/" className="logo flex">
                        <MdModeOfTravel className="icon"/><h1>safarnama</h1>
                    </a>
                </div>

                <div className={active}>
                    <ul className="navLists flex">
                        <li className="navItem">
                            <a href="/" className="navLink">Home</a>
                        </li>
                        <li className="navItem">
                            <a href="/" className="navLink">Package</a>
                        </li>
                        <li className="navItem">
                            <a href="/about" className="navLink">About</a>
                        </li>
                        <li className="navItem">
                            <a href="/contact" className="navLink">Contact</a>
                        </li>
                        <button className="btn">
                            <a href="/">Book now!</a>
                        </button>
                    </ul>

                    <div onClick={hideNav} className="closeNavbar">
                        <IoIosCloseCircle className="icon" />
                    </div>
                </div>
                <div onClick={showNav} className="toggleNavbar icon">
                    <TbGridDots className="icon" />
                </div>

            </header>
        </section>
    )
}

export default Navbar