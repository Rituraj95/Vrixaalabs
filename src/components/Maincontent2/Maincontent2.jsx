import React from 'react';
import img from './pic.png'
import './Mainc.css'


export default function Maincontent2() {
  return (
    <div className='container'>
        <div className='text'>
            <h1>Networking</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nostrum facilis, ullam accusantium rerum expedita? Dicta reprehenderit quisquam praesentium dolor fuga, laudantium voluptatibus veniam, mollitia repellendus, repellat ex laboriosam consectetur.</p>

        </div>
        <div className='img'>
            <img src={img} alt="" />


        </div>
        <button className='button'>Read More</button>

      
    </div>
  )
}
