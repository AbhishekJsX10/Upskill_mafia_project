import React from 'react'
import { IoSettingsSharp } from "react-icons/io5";
const HeroBadge = ({text}) => {
  return (
    <>
    <div className="badgeContainer">
        <IoSettingsSharp/>
        <p>{`${text}`}</p>
    </div>
    </>
  )
}

export default HeroBadge