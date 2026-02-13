import React from 'react'
import {  Calendar , Clock, MapPin } from 'lucide-react';
const Cards = (props) => {

  // console.log(props);   

  return (
    <div className='card'>
      <div className="upperPart">
        <p className="tag">{props.tag}</p>
        <img src={props.url} alt="" />
      </div>

      <div className="middlePart">
        <h1>{props.title}</h1>
        <p><Calendar size={16.5}/>  {props.date}</p>
        <p><Clock size={16.5} /> {props.time}</p>
        <p><MapPin size={16.5} /> {props.location} </p>
      </div>

      <div className='bottomPart'>
        <p>${props.price}</p>
        <button>Book Now</button>
      </div>

    </div>
  )
}

export default Cards
