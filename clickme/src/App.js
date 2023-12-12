import './App.css';
import pi from './images/pi.jpg';
import Counter from './components/counter.jsx';
import Btn from './components/btn.jsx';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const doClick = () => {
    setNumClicks(numClicks + 1);
  }

  const doRestart = () => {
    setNumClicks(0);
  }

  return (
    <div className="App">
      <div className="pi">
        <img
          className="pi-logo"
          src={pi}
          alt="CLICK COUNTER"
        />
        <h1>CLICK COUNTER</h1>
        <p>Click once</p>
        <p>Click twice</p>
        <p>Click all you want</p>
        <div className='container'>
          <Counter
             numClicks={numClicks}/>
          <Btn
            text="Click"
            clickable={true}
            doClick={doClick} />
          <Btn
            text="Restart"
            clickable={false}
            doClick={doRestart} />
        </div>
      </div>
    </div>
  );
}

export default App;