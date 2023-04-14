import React, { useEffect, useState } from "react";
import { StyledTitle, StyledColumnContainer } from "../Styles";
import { transactions, transactionTypePayment } from "../../constants";
import Transaction from "../Transaction";

const LatestTransactions = ({
  isTransactionDetailOpen,
  onTransactionClick,
  setSelectedTransaction,
}) => {
  const [transactionsData, setTransactionsData] = useState([]);

  const handleTransactionClick = (transaction) => {
    setSelectedTransaction(transaction);
    onTransactionClick();
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        setTransactionsData(data);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, []);

  return (
    <StyledColumnContainer
      disableGutters
      maxWidth="sm"
      style={{ marginTop: "0", padding: "10px" }}
    >
      <StyledTitle>{transactions}</StyledTitle>
      {transactionsData.map((transaction, index) => (
        <Transaction
          key={index}
          type={transaction.type}
          amount={transaction.amount}
          transactionName={transaction.transactionName}
          description={transaction.description}
          date={transaction.date}
          pending={transaction.pending}
          authorizedUser={transaction.authorizedUser}
          tax={transaction.tax}
          onClick={() => handleTransactionClick(transaction)}
        />
      ))}
    </StyledColumnContainer>
  );
};

export default LatestTransactions;