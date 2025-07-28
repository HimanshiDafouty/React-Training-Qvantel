// src/context/FinanceContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const [income, setIncome] = useState(() => Number(localStorage.getItem("income")) || 0);
  const [expenses, setExpenses] = useState(() => Number(localStorage.getItem("expenses")) || 0);
  const [transactions, setTransactions] = useState(() =>
    JSON.parse(localStorage.getItem("transactions")) || []
  );

  useEffect(() => {
    localStorage.setItem("income", income);
    localStorage.setItem("expenses", expenses);
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [income, expenses, transactions]);

  return (
    <FinanceContext.Provider value={{ income, expenses, transactions, setIncome, setExpenses, setTransactions }}>
      {children}
    </FinanceContext.Provider>
  );
};

export const useFinance = () => useContext(FinanceContext);
