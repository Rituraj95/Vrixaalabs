import React from 'react'
 

import './maincontent1.css'
import Searchbox from './Searchbox'
export default function Maincontent1() {
  return (
    <div className='maincontent1'>
      <div >
       <h1 className='h11'>VrixaaLabs</h1>
        <h1 className='h1'>Navigate Your Learning Journey <br /> With Interactive E-Learning <br /> Solutions</h1>
        <p className='p1'>Your dream course is waiting for you </p>
        <button class="button">Get Started</button> 
        <Searchbox></Searchbox>
       
      </div>
    </div>
  )
}
