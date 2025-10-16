import { createContext, useState } from "react";
import transactionsData from "../../transactions.json";

const TransactionsContext = createContext(null);

export function TransactionsProvider({ children }) {
  const [transactions, setTransactions] = useState(transactionsData);

  function addTransaction(tx) {
    
    const item = {
      description: tx.description || "",
      value: Number(tx.value) || 0,
      date: tx.date || new Date().toISOString(),
      account: tx.account || "Conta padrão",
    };
    setTransactions((s) => [item, ...s]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export default TransactionsContext;
