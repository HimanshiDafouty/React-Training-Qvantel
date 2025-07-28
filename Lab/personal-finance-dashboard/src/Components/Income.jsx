// src/components/Income.js
import React, { useState } from "react";
import { useFinance } from "../Context/FinanceContext";

const Income = () => {
  const [amount, setAmount] = useState("");
  const { setIncome, setTransactions, income, transactions } = useFinance();

  const handleAddIncome = () => {
    const newIncome = Number(amount);
    if (isNaN(newIncome) || newIncome <= 0) return;

    setIncome(income + newIncome);
    setTransactions([
      ...transactions,
      { id: transactions.length + 1, type: "income", amount: newIncome }
    ]);
    setAmount("");
  };

  return (
    <div className="bg-white p-4 shadow rounded mb-4">
      <h2 className="text-lg font-semibold mb-2">Add Income</h2>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 rounded mr-2"
      />
      <button onClick={handleAddIncome} className="bg-green-500 text-white px-4 py-2 rounded">
        Add
      </button>
    </div>
  );
};

export default Income;
