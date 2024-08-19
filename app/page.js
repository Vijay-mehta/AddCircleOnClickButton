'use client'
import { useState } from "react";

export default function Home() {
const [circleAdd,setCircleAdd] =useState([{
  circle:'',
}])

const [color,setColor] =useState(false)
console.log("uuu",color)
const handleClick =()=>{
  let val=[...circleAdd]
  val.push({circle:""})
  setCircleAdd(val)
}

const handleChange=(index)=>{
  setColor(index)
}

const handleRemove=()=>{  
  setCircleAdd(prevItems => prevItems.slice(0, -1)); 
}

  return (
    <>
  <div className=" flex justify-center">
  <h3 onClick={handleClick} className=" font-medium mr-3  bg-black text-white p-3 rounded-md mt-10  cursor-pointer">Add to circle</h3>
  <h3 className=" font-medium  bg-black text-white p-3 rounded-md mt-10  cursor-pointer" onClick={handleRemove}>Remove to circle</h3>
  </div>
 <div className=" flex m-10"> {circleAdd.map((div,index)=>(<div key={index} className={`w-20 h-20 rounded-full border-2 border-black  ${color ===index ? " bg-red-600":''}`}  onClick={()=>handleChange(index)}></div>
))}</div>
  </>
  );
}
