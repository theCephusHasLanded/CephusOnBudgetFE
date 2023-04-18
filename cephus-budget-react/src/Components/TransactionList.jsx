import React, { useState, useEffect } from "react";
import axios from "axios";
const API = "http://localhost:3333"

function TransactionList() {
  const [transactions, setTransactions] = useState([]);

  console.log(API)
  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((response) => setTransactions(response.data))
      .catch((error) => console.log(error));
  }, []);
  console.log(transactions)

  return (
    <div>
      <h1>Transaction List</h1>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.description} - {transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
