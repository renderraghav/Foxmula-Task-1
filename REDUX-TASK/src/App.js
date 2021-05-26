import React from 'react';
import { useSelector , useDispatch } from 'react-redux'; //to access counter
import { incrememnt } from './actions';
import './index.css';

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();//mandatory to write to dispactch actions
 
  return (
    <div className="App">
       <div className="wrapper">
          <div className="left">
          <button onClick={() => dispatch(incrememnt())}>Click Here</button>
          </div>
          <div className="right">
            <div className="card">
               <h1>{counter}</h1>
            </div>
      </div> 
    </div>  
    </div>
  )
}

export default App;
