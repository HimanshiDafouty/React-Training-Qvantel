// src/components/Expenses.js
import React, { useState } from "react";
import { useFinance } from "../Context/FinanceContext";

const Expenses = () => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const { setExpenses, setTransactions, expenses, transactions } = useFinance();

  const handleAddExpense = () => {
    const newExpenseAmount = Number(amount);
    if (isNaN(newExpenseAmount) || newExpenseAmount <= 0 || !description) return;

    setExpenses(expenses + newExpenseAmount);
    setTransactions([
      ...transactions,
      {
        id: transactions.length + 1,
        type: "expense",
        amount: newExpenseAmount,
        description
      }
    ]);
    setAmount("");
    setDescription("");
  };

  return (
    <div className="bg-white p-4 shadow rounded mb-4">
      <h2 className="text-lg font-semibold mb-2">Add Expense</h2>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 rounded mr-2 mb-2"
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 rounded mr-2 mb-2"
      />
      <button onClick={handleAddExpense} className="bg-red-500 text-white px-4 py-2 rounded">
        Add
      </button>
    </div>
  );
};

export default Expenses;
