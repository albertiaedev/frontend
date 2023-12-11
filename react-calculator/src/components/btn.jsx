import React from 'react';
import '../stylesheets/btn.css'

function Btn(props) {

  const isOperator = value => {
    return isNaN(value) && (value !== '.');
  };

  return(
    <div
      className={`container-btn ${isOperator(props.children) ? 'operator' : null}`}
      onClick={() => props.afterClicked(props.children)}>
      {props.children}
    </div>
  );
}

export default Btn;