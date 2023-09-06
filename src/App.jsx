import './App.css';
import Logo from './components/Logo';
import Button from './components/Button';
import Screen from './components/Screen';
import ClearButton from './components/ClearButton';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  
  const [reset, setReset] = useState(false);
  
  const [input, setInput] = useState('');
  
  const operators = ['+', '-', '*', '/'];

  const addInput = (value) => {
    if (reset) {
      if (operators.includes(value)) {
        setInput(input + value);
        setReset(false);
      } else {
        setInput(value);
        setReset(false);
      }
    } else {
      setInput(input + value);
    }
  }

  const clearInput = () => {
    setInput('');
  }

  const calculateInput = () => {
    if (input) {
      setInput(evaluate(input));
      setReset(true);
    } else {
      alert('No values inserted');
    }
  }

  return (
    <div className="App">
      <Logo />
      <div className='calculator-container'>
        <Screen input={input} />
        <div className='row'>
          <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>+</Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button handleClick={calculateInput}>=</Button>
          <Button handleClick={addInput}>0</Button>
          <Button handleClick={addInput}>.</Button>
          <Button handleClick={addInput}>/</Button>
        </div>
        <div className='row'>
          <ClearButton handleClick={clearInput} />
        </div>
      </div>
    </div>
  );
  
}

export default App;
