import React, { useState } from 'react'

const EventHandling = () =>{
//  const[readOnly,functionToUpdate] useState(1);
 const [count,setCount] = useState(1);


  let cartItem=10;
    const handleClick=()=>{
      console.log('clicked');
    }
    const AddToCart = (second) => { 
      cartItem++;   
    console.log(cartItem);

   }
   const updateState=()=>[
    //count++;   
    setCount(count+5)
   ]
  return (
    <div className='container mt-5'>
        <h1 className='text-center display-4'>EventHandling</h1>
        <hr/>
        <h4>click event</h4>
        <button className='btn btn-primary' onClick={ ()=>{ alert('nice you clicked that button')}}>click to see </button>
        <button className='btn btn-danger'onClick={handleClick}>another click event</button>
        <h4> state management</h4>
        <button className='btn btn-success' onClick={AddToCart}>add itm to cart</button>
        <h1>{cartItem}</h1>
        <button className='btn btn-warning' onClick={updateState}>update state</button>
        <h1>{count}</h1>
        </div>
  )
}

export default EventHandling