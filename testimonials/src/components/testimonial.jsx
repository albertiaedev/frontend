import React from 'react';
import '../stylesheets/testimonial.css';

function Testimonial(props) {
  return(
  <div className='container'>
    <img
      className='image'
      src={require(`../images/${props.image}.png`)}
      alt='' 
    />
    <div className='text'>
      <p className='name-country'>{props.name} in {props.country}</p>
      <p className='role'>{props.role} at {props.workplace}</p>
      <p className='testimonial'><em>"{props.testimonial}"</em></p>
    </div>
  </div>
  );
}

export default Testimonial;