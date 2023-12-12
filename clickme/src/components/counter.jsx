import React from 'react';
import '../stylesheets/counter.css';

function Counter({ numClicks }) {
  return(
    <div className='counter'>
      {numClicks}
    </div>
  );
}

export default Counter;