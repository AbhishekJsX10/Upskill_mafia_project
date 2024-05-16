import React from 'react'
import { FaHatCowboy } from "react-icons/fa";
import HeroBadge from "../Components/HeroBadge"
import { BsFillSendFill } from "react-icons/bs";
import { BsInfoCircleFill } from "react-icons/bs";


const HeroSection = () => {
  return (
    <section className="hero">
            <div className="hero-container">
                <div className="badge">
                    <FaHatCowboy className='badge-icon'/>
                    <p>An <strong>IIT Delhi</strong> Alumni Initiative</p>
                </div>
                <h1>Become an Expert in the field of <span>Data Science with 6 courses</span></h1>
                <p className='hero-undertext'>A specially crafted Teach Kickstart, with 5+ extensive online courses.</p>
                <div className="features">
                    <HeroBadge text="Personal Mentorship"/>
                    <HeroBadge text="Internship Assistance"/>
                    <HeroBadge text="Industry Certified Courses"/>
                </div>
                <div className="hero-buttons">
                    <a href="#" className="hero-btn-1">
                        Enroll Now
                        <BsFillSendFill />
                    </a>
                    <a href="#" className="hero-btn-2">
                        Know More
                        <BsInfoCircleFill/>
                    </a>
                </div>
            </div>
        </section>
  )
}

export default HeroSection