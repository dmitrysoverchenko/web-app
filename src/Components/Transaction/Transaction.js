import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import {
  StyledParagraph,
  StyledSpan,
  StyledBox,
  StyledColumnContainer,
  StyledRowContainer,
} from "../Styles";
import { transactionTypePayment, pendingStatus } from "../../constants";
import { getTransactionDateForRender } from "../../utils";

const Transaction = ({
  type,
  amount,
  transactionName,
  description,
  date,
  pending = false,
  authorizedUser = null,
  tax = null,
  onClick,
}) => {

  const handleClick = () => {
    onClick();
  };

  const styledDescription =
    description?.length > 30 ? description.slice(0, 27) + "..." : description;

  return (
    <StyledRowContainer
      disableGutters
      maxWidth="sm"
      style={{
        marginTop: "0",
        marginBottom: "5px",
        backgroundColor: "#ffffff",
        borderRadius: "10px",
      }}
      onClick={handleClick}
    >
      <StyledBox
        style={{
          width: "45px",
          height: "45px",
          margin: "auto 10px",
          backgroundColor: "#ededed",
        }}
      >
        <FontAwesomeIcon
          icon={faImage}
          size="3x"
          style={{ color: "#ffffff" }}
        />
      </StyledBox>
      <StyledColumnContainer disableGutters style={{ padding: "0" }}>
        <StyledRowContainer
          disableGutters
          style={{
            justifyContent: "space-between",
            margin: "0",
            padding: "0",
            backgroundColor: "#ffffff",
          }}
        >
          <StyledParagraph style={{ fontSize: "20px" }}>
            {transactionName}
          </StyledParagraph>
          <StyledParagraph style={{ fontWeight: "normal", fontSize: "20px" }}>
            {type === transactionTypePayment && "+"}${amount}
          </StyledParagraph>
        </StyledRowContainer>
        <StyledRowContainer
          disableGutters
          style={{
            justifyContent: "space-between",
            margin: "0",
            padding: "0",
            backgroundColor: "#ffffff",
          }}
        >
          <StyledSpan style={{ fontSize: "14px" }}>
            {pending
              ? `${pendingStatus} - ${styledDescription.slice(0, 17) + "..."}`
              : styledDescription}
          </StyledSpan>
          {tax && <StyledSpan
            style={{
              background: "#ededed",
              borderRadius: "7px",
              textAlign: "center",
              width: "10%",
            }}
          >
            {tax}%
          </StyledSpan>}
        </StyledRowContainer>
        <StyledRowContainer
          disableGutters
          style={{
            justifyContent: "space-between",
            margin: "0",
            padding: "0",
            backgroundColor: "#ffffff",
          }}
        >
          <StyledSpan style={{ fontSize: "14px" }}>
            {authorizedUser ? `${authorizedUser} - ${getTransactionDateForRender(date)}` : getTransactionDateForRender(date)}
          </StyledSpan>
        </StyledRowContainer>
      </StyledColumnContainer>
      <StyledBox
        style={{
          width: "45px",
          height: "45px",
        }}
      >
        <FontAwesomeIcon
          icon={faChevronRight}
          size="1x"
          style={{ color: "#ededed" }}
        />
      </StyledBox>
    </StyledRowContainer>
  );
};

export default Transaction;
