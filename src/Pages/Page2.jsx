import React from 'react'
import { IoMdEye } from "react-icons/io";
import TextBox from '../Components/TextBox';

const Page2 = () => {
  return (
    <>
    <div className="page2-container">
        <div className="page2-contains">
        <div className="page2-part1">
            <p>DATA SCIENCE COURSE LEARNING PATH</p>
        </div>
        <div className="page2-part2">
            <h2><span>Data Science </span> Course Curriculum</h2>
        </div>
        <div className="page2-part3">
            <TextBox heading="C++" description="Learn C++ for strong fundamentals."/>
            <TextBox heading="MERN" description="Master the MERN stack for high-demand projects."/>
            <TextBox heading="Data Structure & Algorithm" description="Excel in Data Structures and Algorithms for interview success."/>
            <TextBox heading="Competitve Programming" description="Excel in Data Structures and Algorithms for interview success."/>
        </div>
        </div>
    </div>
    </>
  )
}

export default Page2