import React, { useEffect, useState } from "react";
import { StyledTitle, StyledColumnContainer } from "../Styles";
import { transactions } from "../../constants";
import Transaction from "../Transaction";

const LatestTransactions = ({
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

  const sortedData = transactionsData.sort((a, b) => Date.parse(b.date) - Date.parse(a.date)).slice(0, 10);

  return (
    <StyledColumnContainer
      disableGutters
      maxWidth="sm"
      style={{ marginTop: "0", padding: "10px" }}
    >
      <StyledTitle>{transactions}</StyledTitle>
      {sortedData.map((transaction, index) => (
        <Transaction
          key={index}
          type={transaction.type}
          amount={transaction.amount}
          transactionName={transaction.transactionName}
          description={transaction.description}
          date={transaction.date}
          status={transaction.status}
          authorizedUser={transaction.authorizedUser}
          tax={transaction.tax}
          onClick={() => handleTransactionClick(transaction)}
        />
      ))}
    </StyledColumnContainer>
  );
};

export default LatestTransactions;
