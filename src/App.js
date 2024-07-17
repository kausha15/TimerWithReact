import logo from './logo.svg';
import {useState, useEffect} from 'react'
import './App.css';

function App() {


  const [timer, setTimer] = useState(0);
  var timerId;

  useEffect(() => {
    timerId = setInterval(() => setTimer(timer + 1), 1000);

    return () => clearInterval(timerId);
  });

  const stopInterval = () =>{
    clearInterval(timerId);
  }

  return (
    <div className="App">
      Count : {timer} <br/>
      <input type='button' value='stop' onClick={stopInterval} />
      
    </div>
  );
}

export default App;
