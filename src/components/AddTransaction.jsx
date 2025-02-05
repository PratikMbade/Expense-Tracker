 import { useState } from "react";
 import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

 const AddTransaction = () => {

  const { addTransaction } = useContext(GlobalContext);

  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) =>{
    e.preventDefault();

    const newTransaction = {

      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount //amount is number
    }

    addTransaction(newTransaction)
  }
  
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Enter the name of transaction</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." required />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount <br />(negative - expense, positive - income)</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." required />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction