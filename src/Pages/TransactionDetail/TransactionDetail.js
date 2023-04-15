import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import {
  StyledParagraph,
  StyledSpan,
  StyledBox,
  StyledColumnContainer,
  StyledRowContainer,
} from "../../Components/Styles";
import { transactionTypePayment, status, total } from "../../constants";

const TransactionDetail = ({
  setIsTransactionDetailOpen,
  selectedTransaction,
}) => {
  const handleTransactionClose = () => {
    setIsTransactionDetailOpen(false);
  };

  return (
    <StyledColumnContainer
      disableGutters
      maxWidth="sm"
      style={{
        alignItems: "center",
        height: "100vh",
      }}
      onClick={handleTransactionClose}
    >
      <FontAwesomeIcon
        icon={faChevronLeft}
        size="1x"
        style={{ color: "#000000", marginRight: "auto", padding: "5px" }}
      />
      <StyledParagraph style={{ fontWeight: "normal", fontSize: "45px" }}>
        {selectedTransaction.type === transactionTypePayment && "+"}$
        {selectedTransaction.amount}
      </StyledParagraph>
      <StyledSpan>{selectedTransaction.city}</StyledSpan>
      <StyledSpan>
        {selectedTransaction.date},{selectedTransaction.time}
      </StyledSpan>
      <StyledBox style={{ marginTop: "20px", padding: "15px" }}>
        <StyledColumnContainer
          style={{ backgroundColor: "#ffffff", width: "300px" }}
        >
          <StyledParagraph>{`${status}: ${selectedTransaction.status}`}</StyledParagraph>
          <StyledSpan>{selectedTransaction.description}</StyledSpan>
          <StyledRowContainer
            disableGutters
            style={{
              justifyContent: "space-between",
              margin: "0",
              padding: "0",
              backgroundColor: "#ffffff",
            }}
          >
            <StyledParagraph>{total}</StyledParagraph>
            <StyledParagraph>
              {selectedTransaction.type === transactionTypePayment && "+"}$
              {selectedTransaction.amount}
            </StyledParagraph>
          </StyledRowContainer>
        </StyledColumnContainer>
      </StyledBox>
    </StyledColumnContainer>
  );
};

export default TransactionDetail;
