import React from 'react';
import './App.css';
import { GlobalProvoider } from './context/GobalContext';
import Header from './components/Header';
import { Total } from './components/Total';
import Cards from './components/Cards';
import { TransactionHistory } from './components/TransactionHistory';
import { AddTransaction } from './components/AddTransaction';


function App() {
  return (
  <GlobalProvoider>
    <div className="App">
      <div className="Container">

<Header/>
<Total/>
<Cards/>
<TransactionHistory/>
<AddTransaction/>

 </div>
 </div></GlobalProvoider>
  );
}

export default App;
