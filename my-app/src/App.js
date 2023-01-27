import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Routerdom from './Routerdom';
import Objt from './Objt';
import Nws from './Nws';
import Tnry from './Tnry';
import SpreadOp from './SpreadOp';
import Useeft from './Useeft';
function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
    <Routerdom/>
    <Routes>
    <Route path='/Objt' element={<Objt/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
