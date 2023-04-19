import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function TransactionList() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((response) => setTransactions(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Transaction List</h1>
      <ol>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            <Link to={`/transactions/${transaction.id}`}>
              <strong>{transaction.item_name} - {transaction.amount}</strong>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TransactionList;
