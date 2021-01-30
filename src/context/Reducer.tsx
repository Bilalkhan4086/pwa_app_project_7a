import { Transaction } from "./ContextTypes";

const Reducer = ((state:any,action:any)=>{
    switch(action.type){
        case "ADDTRANSACTION":
            {
            return{
                ...state,transactions: [action.payload, ...state.transactions]
            }
            }
    case "REMOVETRANSACTION":{
        return{
            ...state,
            transactions : state.transactions.filter((i:Transaction) => i.id !== action.payload)
        }
         }
         default:
            {
                return(state);
            }
        }

}

)
export default Reducer;