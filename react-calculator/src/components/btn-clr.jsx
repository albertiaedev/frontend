import React from 'react';
import '../stylesheets/btn.css'

const BtnClr = (props) => (
  <div className='btn-clr' onClick={props.doClr}>
    {props.children}
  </div>
);

export default BtnClr;