"use client";

import React from 'react'
import { UseDispatch,useDispatch,useSelector } from 'react-redux';
import { remove } from '@/Redux/CartSlice';
function cartPage() {
    const dispatch=useDispatch()
    const cartItems = useSelector((state)=>state.cart)
    const handleRemove=(id)=>{
        dispatch(remove(id))
    }
  return (
    <div>
    <h3>Cart Page</h3>
    <div className=' cartWrapper'>
    {
        cartItems.map((item)=>(
<div className='cartCard'>
<img src= {item.image} alt= 'img'/>
<h4> {item.title} </h4>
<h5> {item.price} </h5>
<button className="btn" onClick={()=>handleRemove(item.id)}>Remove</button>
</div>
))
    }
    </div>
    </div>
  )
}

export default cartPage