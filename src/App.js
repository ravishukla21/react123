import logo from './logo.svg';
import './App.css';
import { Counter } from './components/Counter';
import { Counterreducer } from './components/Couterreducer';

import Counterclass from './components/Counterclass';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <Counterclass/>
      <Counter/>
      <Counterreducer/>
      <br/>
      <Todo/>
      
    </div>
  );
}

export default App;
