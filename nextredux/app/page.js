"use client";
import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { add } from "@/Redux/CartSlice";
export default function Home() {
  const [products,setProducts]=useState([])
const dispatch=useDispatch()

const handleAdd=(product)=>{

  dispatch(add(product))
}


  const getProducts=async ()=>{
    const res= await fetch('https://fakestoreapi.com/products')
    const data= await res.json()
    setProducts(data)
    
  }
  useEffect(()=>{
    getProducts()
  },[])
  return (
    <div className="productsWrapper">
    {
      products.map((product)=>(
<div className="card" key={product.id}>
<img src= {product.image} alt="img"/>
<h4> {product.title} </h4>
<h5> {product.price} </h5>
<button className="btn" onClick={()=>handleAdd(product)}>Add to cart</button>
</div>
      ))
    }
    </div>
  );
}
