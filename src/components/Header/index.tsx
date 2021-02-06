import React from 'react';
import './index.css';
import { InitNotification } from '../../firebase';

const Header = () => {
  return (
    <div className="header">
      Expense Tracker App By Bilal
      <br/>
      <span onClick={()=>{InitNotification()}} style={{color:"red",fontWeight:'lighter',fontSize:"20px",cursor:"pointer"}}>(React Typescript Pwa Firebase Messaging App)</span>
    </div>
  )
}
export default Header;