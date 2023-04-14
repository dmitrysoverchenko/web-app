import React from "react";
import LatestTransactions from "../../Components/LatestTransactions";

const TransactionList = ({
  isTransactionDetailOpen,
  setIsTransactionDetailOpen,
  selectedTransaction,
}) => {
  const handleTransactionClose = () => {
    setIsTransactionDetailOpen(false);
  };

  return (
    <>
      {/* <LatestTransactions
        isTransactionDetailOpen={isTransactionDetailOpen}
        onTransactionClick={handleTransactionClose}
        selectedTransaction={selectedTransaction}
      /> */}
      <div onClick={handleTransactionClose}>111</div>
    </>
  );
};

export default TransactionList;
