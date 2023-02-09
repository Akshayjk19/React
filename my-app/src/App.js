import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Routerdom from './Routerdom';
import Objt from './Objt';
import Nws from './Nws';
import Tnry from './Tnry';
import SpreadOp from './SpreadOp';
import Useeft from './Useeft';
import Objct from './Objct';
import Sprad from './Sprad';
import Uzeffect from './Uzeffect';

import Dataadd from './Dataadd';
import Props3 from './Props3';
import Apis from './Apis';

function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
   
    <Routes>
    <Route path='/Objt' element={<Objt/>}/>
    </Routes>
    </BrowserRouter>
    <Apis/>
    <Dataadd/>
    <Props3/>
    
    
   <Objct/>
   <Sprad/>
  
   
    
    </div>
  );
}

export default App;
