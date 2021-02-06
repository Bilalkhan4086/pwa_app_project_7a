import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GobalContext'
import { Feild } from './Feild'
import './index.css'
export const TransactionHistory = () => {
    const { transactions, RemTrans } = useContext(GlobalContext);
    return (
        <div>
            <span
                className="Transhis"
            >
                TransactionHistory
            </span><hr />
            {transactions.map((i) =>
                <Feild
                    key={i.id}
                    id={i.id}
                    RemTrans={RemTrans}
                    data={i}
                />)}
        </div>
    )
}
