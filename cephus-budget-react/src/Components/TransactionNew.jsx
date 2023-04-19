import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

const TransactionNew = () => {
  const [transaction, setTransaction] = useState({
    item_name: "",
    amount: "",
    date: "",
    from: "",
    category: "",
    deposit: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTransaction((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post(`${API}/transactions`, transaction)
      .then(response => {
        navigate(`/transactions/${response.data.id}`);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>New Transaction</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="item_name">Item Name:</label>
          <input type="text" id="item_name" name="item_name" value={transaction.item_name} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input type="number" id="amount" name="amount" value={transaction.amount} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input type="text" id="date" name="date" value={transaction.date} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="from">From:</label>
          <input type="text" id="from" name="from" value={transaction.from} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <input type="text" id="category" name="category" value={transaction.category} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="deposit">Deposit:</label>
          <input type="checkbox" id="deposit" name="deposit" checked={transaction.deposit} onChange={handleInputChange} />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default TransactionNew;
