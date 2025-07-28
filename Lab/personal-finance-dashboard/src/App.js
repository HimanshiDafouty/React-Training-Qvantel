// src/App.js
import React from "react";
import { FinanceProvider } from "./Context/FinanceContext";
import Balance from "./Components/Balance";
import Income from "./Components/Income";
import Expenses from "./Components/Expenses";
import Transactions from "./Components/Transactions";

const App = () => {
  return (
    <FinanceProvider>
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">💰 Personal Finance Dashboard</h1>
          <Balance />
          <Income />
          <Expenses />
          <Transactions />
        </div>
      </div>
    </FinanceProvider>
  );
};

export default App;
