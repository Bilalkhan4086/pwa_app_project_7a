import { Button, TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../context/GobalContext';
import './index.css';
import { InitNotification } from '../../firebase';


export const AddTransaction = () => {
const [am, setam] = useState(0);
const [des,setdes] = useState('');

const {AddTrans} = useContext(GlobalContext)
    return (
        <div className="AddTrans">
            AddTransaction
            <hr/>
            <br/>
        <TextField id="standard-basic" label="Description" onChange={(e)=>(setdes(e.target.value))}  style={{paddingLeft:"10px",width:"430px",marginRight:"10px"}}/>
        <br/>
        <TextField id="standard-basic" type="number" label="Amount" onChange={(e)=>(setam(parseFloat(e.target.value)))} fullWidth style={{paddingLeft:"10px",width:"430px",marginRight:"10px"}}/>
    <br/><br/>
        <Button disabled={(des === '') || (am === 0)  ? true:false  } variant="contained" onClick={()=>{
            var id =  1 + (Math.random() * (100-1)).toString();
            InitNotification();
            AddTrans({id,am,des});console.log("Amount =",am,"Description =",des)}} style={{width:"350px",marginBottom:"20px"}} color="primary">
            Add Transaction
        </Button>
    <br/>
        </div>
    )
}
