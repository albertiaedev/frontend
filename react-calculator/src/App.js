import logo from './logo.svg';
import './App.css';
import Btn from './components/btn.jsx';
import BtnClr from './components/btn-clr.jsx';
import Screen from './components/screen.jsx'
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const doClick = value => {
    setInput(input + value);
  };

  const doResult = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert('Insert a number.');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div>
          <p className='text'>My Calculator</p>
        </div>
        <div>
          <p className='text'>A React App by <br></br>
            <a className='link' href='https://github.com/jesusalberto18'>
              J.A. Hernández
            </a>
          </p>
        </div>
      </header>
      <div className='container'>
        <Screen input={input} />
        <div className='row'>
          <BtnClr doClr={() => setInput('')}>C</BtnClr>
        </div>
        <div className='row'>
          <Btn afterClicked={doClick}>7</Btn>
          <Btn afterClicked={doClick}>8</Btn>
          <Btn afterClicked={doClick}>9</Btn>
          <Btn afterClicked={doClick}>/</Btn>
        </div>
        <div className='row'>
          <Btn afterClicked={doClick}>4</Btn>
          <Btn afterClicked={doClick}>5</Btn>
          <Btn afterClicked={doClick}>6</Btn>
          <Btn afterClicked={doClick}>*</Btn>
        </div>
        <div className='row'>
          <Btn afterClicked={doClick}>1</Btn>
          <Btn afterClicked={doClick}>2</Btn>
          <Btn afterClicked={doClick}>3</Btn>
          <Btn afterClicked={doClick}>-</Btn>
        </div>
        <div className='btn'>
          <Btn afterClicked={doClick}>.</Btn>
          <Btn afterClicked={doClick}>0</Btn>
          <Btn afterClicked={doResult}>=</Btn>
          <Btn afterClicked={doClick}>+</Btn>
        </div>
      </div>
    </div>
  );
}

export default App;