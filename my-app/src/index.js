import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Trnry from './Trnry';
import Dmyapi from './Dmyapi';
import Sprd from './Sprd';
import UserProvider from './Context/UserProvider';
import Arryaaa from './Arryaaa';
import Imagepo from './Imagepo';
import Txtcolorchange from './Txtcolorchange';
import Useeft from './Useeft';
import Dcrmentalrt from './Dcrmentalrt';
import Tablemap from './Tablemap';
import Props from './Props';
import Prop2 from './Prop2';
import Routerdom from './Routerdom';
import NewContext from './NewContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>

 
  <NewContext>
 <App/>
 </NewContext>

  </React.StrictMode>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
