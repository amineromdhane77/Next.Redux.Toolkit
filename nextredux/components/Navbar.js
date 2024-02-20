"use client";

import React from 'react'
import Link from 'next/link';
import { useSelector } from 'react-redux';
function Navbar() {
    const item = useSelector((state)=>state.cart)
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between", backgroundColor:"red" ,padding:"20PX"}}>
    <span>Redux Nextjs-13.4</span>
    <div>
       <Link className='navLink' style={{fontWeight:"bolder"}} href={"/"}>Home</Link>
       <Link className='navLink' style={{fontWeight:"bolder",marginRight:"7px"}} href={"/cart"}>Cart</Link>
       <span style={{fontWeight:"bolder"}}>items:{item.length} </span>
    </div>
</div>
  )
}

export default Navbar