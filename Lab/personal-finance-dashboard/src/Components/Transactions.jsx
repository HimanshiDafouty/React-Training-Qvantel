// src/components/TransactionList.js
import React, { useState, useTransition } from "react";
import { useFinance } from "../Context/FinanceContext";

const Transactions = () => {
  const { transactions } = useFinance();
  const [filter, setFilter] = useState("all");
  const [isPending, startTransition] = useTransition();

  const filtered = transactions.filter((tx) => {
    if (filter === "all") return true;
    return tx.type === filter;
  });

  return (
    <div className="bg-white p-4 shadow rounded mb-4">
      <h2 className="text-lg font-semibold mb-2">Transaction List</h2>
      <div className="mb-4">
        <button
          className={`px-3 py-1 rounded mr-2 ${filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => startTransition(() => setFilter("all"))}
        >
          All
        </button>
        <button
          className={`px-3 py-1 rounded mr-2 ${filter === "income" ? "bg-green-500 text-white" : "bg-gray-200"}`}
          onClick={() => startTransition(() => setFilter("income"))}
        >
          Income
        </button>
        <button
          className={`px-3 py-1 rounded ${filter === "expense" ? "bg-red-500 text-white" : "bg-gray-200"}`}
          onClick={() => startTransition(() => setFilter("expense"))}
        >
          Expenses
        </button>
      </div>

      <ul>
        {isPending ? (
          <p>Loading...</p>
        ) : (
          filtered.map((tx) => (
            <li key={tx.id} className="border-b py-2">
              <span className="font-medium">{tx.type.toUpperCase()}</span>: ${tx.amount}{" "}
              {tx.description && <em>({tx.description})</em>}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Transactions;
