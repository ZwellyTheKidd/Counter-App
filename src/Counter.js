import React from 'react';
import { connect } from 'react-redux'
import CurrDate from './CurrDate';

// Action creator
function incrementCounter(num) {
  return { type: 'INCREMENT', num: num }
}
function decrementCounter(num) {
  return { type: 'DECREMENT', num: num }
}
function multiplyCounter(num) {
  return { type: 'MULTIPLY', num: num }
}
function divideCounter(num) {
  return { type: 'DIVIDE', num: num }
}

function Counter(props) {
  function handleClick() {
    props.incrementCounter(1);
  }
  function deClick() {
    props.decrementCounter(-1);
  }
  function muClick() {
    props.multiplyCounter(2);
  }
  function diClick() {
    props.divideCounter(2);
  }
    return <div>
      <CurrDate />
      <div className='listDiv'>

    <p>{props.count}</p>
    
    <div className='mult'>
      <button className='btn1' onClick={muClick}>Multiply 2x</button>

    <button className='btn2' onClick={diClick}>Divide %2</button>
    </div>
    <div className='btn'>
    <button className='btn1' onClick={handleClick}>Plus +</button>
    <button className='btn2' onClick={deClick}>Minus -</button>
    </div>
    </div>
    </div>;
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}
const mapDispatchToProps = {
  incrementCounter,decrementCounter,multiplyCounter,divideCounter
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);