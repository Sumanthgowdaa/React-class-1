import './App.css';

import Ex1 from './component/Ex1';
import Ex2 from './component/Ex2';
import Home from './component/Home';

function App() {
  return (
    <div className="App">
     <h1>React APP Component</h1> 
     <h3>First Class</h3>
     <Home/>
     <Ex1/>
     <Ex2/>
    </div>
  );
}

export default App;

// npm i --save module 
// npm i --save-dev module
