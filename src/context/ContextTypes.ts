export type GProvoider ={
children : any,
}

export type Transaction = {
   id: string;
  text: string;
  amount: number;
}

export type TransactionFun = {
   id: string;
  des: string;
  am: number;
}

export type AddTransaction = (transaction: TransactionFun) => void;

export type Dispatch = {
dispatch : ()=>void
}

export type Data = {
   am:number,
   des:string
}

export type FeildType = {
   data:Data,
   id:string,
   RemTrans: (id:string)=>void
}