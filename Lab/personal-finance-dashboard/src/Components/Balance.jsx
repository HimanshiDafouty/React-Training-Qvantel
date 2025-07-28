// src/components/Balance.js
import React from "react";
import { useFinance } from "../Context/FinanceContext";

const Balance = () => {
  const { income, expenses } = useFinance();
  const balance = income - expenses;

  return (
    <div className="bg-white p-4 shadow rounded mb-4 text-center">
      <h2 className="text-2xl font-semibold">Balance</h2>
      <p className="text-xl text-green-600 font-bold">$  {balance}</p>
    </div>
  );
};

export default Balance;
