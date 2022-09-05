//  1. react components are functions
//  2. function name must start with uppercase letter
//  3. function should return atleast single JSX element
//  4. function should be exported


import React from 'react'
import './home.css';
import myimg from '../images.jpeg'

const Home = () => {
  return (
    <div>
        <h1 className='myclass' style={{color:'red', background:'yellow'}}>HOME PAGE</h1>
        <hr/>
        {/* or <img src="images"alt="" />   */}
        {/* <img src={myimg} alt=""/> */}
      
    </div>
  )
}

export default Home;