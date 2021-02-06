import React, { useContext } from 'react';
import './index.css';
import { GlobalContext } from '../../context/GobalContext'


export const Total = () => {

    const { transactions } = useContext(GlobalContext);
    //creating list of all the transaction's amounts 
    const list = (transactions).map((i) => i.am);
    //adding new transaction in totalamount
    const totalAmmount = list.filter(i => i).reduce((acc, i) => (acc += i * 1), 0);

    return (
        <div
            className="total"
        >
            Total Amount<br />
            <span
                className="Tamount"
            >
                $ {totalAmmount}
            </span>
        </div>
    )
}
