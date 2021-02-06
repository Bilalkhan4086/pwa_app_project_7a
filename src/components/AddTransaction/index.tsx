import { Button, TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../context/GobalContext';
import './index.css';


export const AddTransaction = () => {
// am = amount and des = description
    const [am, setam] = useState(0);
    const [des, setdes] = useState('');
// calling AddTrans from Global Context
    const { AddTrans } = useContext(GlobalContext)

    return (
        <div className="AddTrans">
            AddTransaction
            <hr />
            <br />
            <TextField
                id="standard-basic"
                label="Description"
                onChange={(e) => (setdes(e.target.value))}
                fullWidth
                style={{ maxWidth: "420px" }}
            />
            <br />
            <TextField
                id="standard-basic"
                type="number"
                label="Amount"
                onChange={(e) => (setam(parseFloat(e.target.value)))}
                fullWidth
                style={{ maxWidth: "420px" }}
            />
            <br /><br />
            <Button
                disabled={(des === '') || (am === 0) ? true : false}
                variant="contained"
                onClick={() => {
                    // Assigning random vaue to id of any transaction
                    var id = 1 + (Math.random() * (100 - 1)).toString();
                    AddTrans({ id, am, des }); console.log("Amount =", am, "Description =", des)
                }}
                style={{ maxWidth: "350px", marginBottom: "20px", marginRight: "10px" }}
                color="primary"
            >
                Add Transaction
                </Button>
            <br />
        </div>
    )
}
