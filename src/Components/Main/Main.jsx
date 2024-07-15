import React, {useEffect} from "react";
import './main.css'
import istanbul from '../../Assets/istanbul.jpg'
import kashmir from '../../Assets/kashmir.jpg'
import dubai from '../../Assets/dubai.jpg'
import bali from '../../Assets/bali.jpg'
import rome from '../../Assets/rome.jpg'
import paris from '../../Assets/paris.jpg'
import { MdLocationOn } from "react-icons/md";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import Aos from 'aos'
import 'aos/dist/aos.css'
const Data=[
    {
        id:1,
        imgSrc: rome,
        destTitle: 'Rome',
        location: 'Italy',
        price: '$600',
        description: 'This unique city which is admired by its charming nature and the attractive atmosphere is also the symbol of dynamic and modern city life.'
    },
    {
        id:2,
        imgSrc: kashmir,
        destTitle: 'Kashmir',
        location: 'India',
        price: '$200',
        description: 'This unique city which is admired by its charming nature and the attractive atmosphere is also the symbol of dynamic and modern city life.'
    },
    {
        id:3,
        imgSrc: dubai,
        destTitle: 'Dubai',
        location: 'UAE',
        price: '$800',
        description: 'This unique city which is admired by its charming nature and the attractive atmosphere is also the symbol of dynamic and modern city life.'
    },
    {
        id:4,
        imgSrc: bali,
        destTitle: 'Bali',
        location: 'Indonesia',
        price: '$300',
        description: 'This unique city which is admired by its charming nature and the attractive atmosphere is also the symbol of dynamic and modern city life.'
    },
    {
        id:5,
        imgSrc: rome,
        destTitle: 'Rome',
        location: 'Italy',
        price: '$400',
        description: 'This unique city which is admired by its charming nature and the attractive atmosphere is also the symbol of dynamic and modern city life.'
    },
    {
        id:6,
        imgSrc: istanbul,
        destTitle: 'Istanbul',
        location: 'Turkey',
        price: '$700',
        description: 'This unique city which is admired by its charming nature and the attractive atmosphere is also the symbol of dynamic and modern city life.'
      }
    
]

const Main = () =>{
    useEffect(()=>{
        Aos.init({duration: 1000})
    }, [])

    return(
        <section className="main container">
            <div data-aos="fade-right" className="secTitle">
                <h3 className="title">Most Visited Places</h3>
            </div>

            <div className="secContent grid">
                {
                    Data.map(({id,imgSrc,destTitle,location,price,description})=>{
                        return(
                            <div data-aos="fade-up" key={id} className="singleDestination">
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle} />
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span className="continent flex">
                                        <MdLocationOn className="icon"/>
                                    <span className="name">{location}</span>
                                    </span>

                                    <div className="price flex">
                                        <p>Price:</p>
                                        <h5>{price}</h5>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <button className="btn flex">
                                        Details <HiOutlineClipboardCheck className="icon"/>

                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Main