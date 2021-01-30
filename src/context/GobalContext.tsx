import React,{ createContext, useReducer } from "react";
import { AddTransaction,TransactionFun } from "./ContextTypes";
import Reducer from "./Reducer";

const initialState = {
    transactions:[{id:"11",am:200,des:"income gone"}],
    AddTrans:(trans:TransactionFun)=>{},
    RemTrans:(id:string)=>{}
}

export const GlobalContext = createContext(initialState);




export const GlobalProvoider: React.FC<any> = ({children}) =>{
    
    const [state, dispatch]:any = useReducer(Reducer, initialState)
    
    const AddTrans:AddTransaction = (trans:TransactionFun)=>{
        dispatch({
            type:"ADDTRANSACTION",
            payload:trans
        })
    }
    
    
    const RemTrans = (id:string) =>{
        dispatch({
            type:"REMOVETRANSACTION",
            payload:id
        })
    }

    return(
    <GlobalContext.Provider value={{
     transactions:state.transactions,
     AddTrans,
     RemTrans
    }}
    >
        {children}
    </GlobalContext.Provider>)
}