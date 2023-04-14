import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import {
  StyledTitle,
  StyledParagraph,
  StyledSpan,
  StyledBox,
  StyledColumnContainer,
  StyledRowContainer,
} from "../Styles";
import {
  cardBalance,
  dailyPoints,
  noPaymentDue,
  cardLimit,
  decimalPlaces,
} from "../../constants";
import {
  getCardBalanceValue,
  getAvailableBalance,
  getCurrentMonth,
  calculateDailyPoints,
} from "../../utils";

const CardBalance = () => {
  const cardBalanceValue = getCardBalanceValue(cardLimit, decimalPlaces);
  const availableBalance = getAvailableBalance(
    cardLimit,
    cardBalanceValue,
    decimalPlaces
  );
  const currentMonth = getCurrentMonth();
  const currentDailyPoints = "null";
  return (
    <StyledRowContainer
      disableGutters
      maxWidth="sm"
      style={{ marginBottom: "0" }}
    >
      <StyledColumnContainer disableGutters>
        <StyledBox>
          <StyledParagraph>{cardBalance}</StyledParagraph>
          <StyledTitle>${cardBalanceValue}</StyledTitle>
          <StyledSpan>${availableBalance} Available</StyledSpan>
        </StyledBox>
        <StyledBox>
          <StyledParagraph>{dailyPoints}</StyledParagraph>
          <StyledSpan>{currentDailyPoints}</StyledSpan>
        </StyledBox>
      </StyledColumnContainer>
      <StyledColumnContainer disableGutters>
        <StyledBox sx={{ height: "100%", position: "relative" }}>
          <StyledParagraph>{noPaymentDue}</StyledParagraph>
          <StyledSpan>You’ve paid your {currentMonth} balance.</StyledSpan>
          <FontAwesomeIcon
            icon={faCheckCircle}
            size="4x"
            style={{
              color: "#787878",
              position: "absolute",
              bottom: "10",
              right: "10",
            }}
          />
        </StyledBox>
      </StyledColumnContainer>
    </StyledRowContainer>
  );
};

export default CardBalance;
