import './App.css';
import Counter from './component/Counter.jsx'
import { useDispatch } from 'react-redux';
function App() {
  const dispatch =useDispatch();
  return (
    <div className="App">
      <h1>Redux tutorisl</h1>
      <button onClick={e=> dispatch({type:"INCREMENT"})}>increment</button>
      <Counter/>
      <button onClick={e=> dispatch({type:"DECREMENT"})}>Decrement</button>
    </div>
  );
}

export default App;
