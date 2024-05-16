import React from 'react'
import { IoMdEye } from "react-icons/io";
const TextBox = ({heading,description}) => {
  return (
    <>
    <div className="page2-part3-block">
                <div className="page2-part3-block-part1">
                    <h3>{heading}</h3>
                    <p>{description}</p>
                </div>
                <div className="page2-part3-block-part2">
                    <i><IoMdEye /></i>
                    <p>View Curriculum</p>
                </div>
    </div>
    </>
  )
}

export default TextBox