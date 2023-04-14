import React from "react";
import CardBalance from "../../Components/CardBalance";
import LatestTransactions from "../../Components/LatestTransactions";

const TransactionList = ({
  isTransactionDetailOpen,
  setIsTransactionDetailOpen,
  selectedTransaction,
  setSelectedTransaction,
}) => {
  const handleTransactionClick = () => {
    setIsTransactionDetailOpen(true);
  };

  return (
    <>
      <CardBalance />
      <LatestTransactions
        isTransactionDetailOpen={isTransactionDetailOpen}
        onTransactionClick={handleTransactionClick}
        setSelectedTransaction={setSelectedTransaction}
        selectedTransaction={selectedTransaction}
      />
    </>
  );
};

export default TransactionList;
