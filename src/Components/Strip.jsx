import React from 'react';
import { NavLink } from 'react-router-dom';

const Strip = () => {

  const handelNavColor = (e) =>{
    return {
      color: e.isActive ? "#f1e0c5":"#fff",
      textDecoration: e.isActive ? "underline":"",
      fontWeight: e.isActive ? "600":""
    }
  }

  return (
    <div className='stripContainer'>
      <NavLink to='/' style={(e)=>handelNavColor(e)} activeClassName='activeLink' className="NavLink">Overview</NavLink>
      <NavLink to='/curriculum' style={(e)=>handelNavColor(e)} activeClassName='activeLink' className="NavLink" >Curriculum</NavLink>
      <NavLink to='/refund' style={(e)=>handelNavColor(e)} activeClassName='activeLink' className="NavLink" >Refund</NavLink>
      <NavLink to='/testimonials' style={(e)=>handelNavColor(e)} activeClassName='activeLink' className="NavLink">Testimonials</NavLink>
    </div>
  );
}

export default Strip;