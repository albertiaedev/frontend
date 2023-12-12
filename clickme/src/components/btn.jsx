import React from 'react';
import '../stylesheets/btn.css';

function Btn({ text, clickable, doClick }) {
  return(
    <button
      className={ clickable ? 'clickable' : 'restart' }
      onClick={doClick}>
      {text}
    </button>
  );
}

export default Btn;