// import logo from './logo.svg';
import './App.css';
import Heading from './Components/Heading';
import AddButton from './Components/AddButton';
import  {ReduceButton } from './Components/ReduceButton';

function App() {
  //const count1=5;
  return (
    <>
    <h1>hello</h1>
    <Heading count="1"/>
    <AddButton text="ADD" hello="red"/>
    <ReduceButton/>
    </>
    
  );
}

export default App;
