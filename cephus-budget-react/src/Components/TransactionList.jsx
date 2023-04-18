import React, { useState, useEffect } from "react";
import axios from "axios";

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get("/api/transactions")
      .then((response) => setTransactions(response.data))
      .catch((error) => console.log(error));
  }, []);

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
