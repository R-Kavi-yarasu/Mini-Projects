import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Calendor from './Mini-Projects/Calendor/Calendor';
import Quiz from './Mini-Projects/QuizApp/Quiz';
// import Clock from './DigitalClock/Clock';  
// import PG from './Mini-Projects/Password-Generator/PG';
// import Addvice from './AdviceApp/Addvice';
// import UserSDetails from './FormSamples/UserSDetails';
// import RegFrm from './FormSamples/RegFrm';
// import UserCode from './Card/UserCode';
// import Qrcode from './QRCode/Qrcode';
// import { Cart } from './FormSamples/Cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <UserCode /> */}
    {/* <Qrcode /> */}
    {/* <Cart /> */}
    {/* <UserSDetails /> */}
    {/* <RegFrm /> */}
    {/* <Addvice /> */}
    {/* <Clock /> */}
    {/* <PG /> */}
    {/* <Calendor /> */}
    <Quiz />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
