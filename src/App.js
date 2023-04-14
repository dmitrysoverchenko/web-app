import React, { useState } from "react";
import TransactionList from "./Pages/TransactionsList";
import TransactionDetail from "./Pages/TransactionDetail";

function App() {
  const [isTransactionDetailOpen, setIsTransactionDetailOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(false);
  return (
    <>
      {isTransactionDetailOpen ? (
        <TransactionDetail
          isTransactionDetailOpen={isTransactionDetailOpen}
          setIsTransactionDetailOpen={setIsTransactionDetailOpen}
          selectedTransaction={selectedTransaction}
        />
      ) : (
        <TransactionList
          isTransactionDetailOpen={isTransactionDetailOpen}
          setIsTransactionDetailOpen={setIsTransactionDetailOpen}
          selectedTransaction={selectedTransaction}
          setSelectedTransaction={setSelectedTransaction}
        />
      )}
    </>
  );
}

export default App;
