import moment from "moment/moment";

export const getCardBalanceValue = (cardLimit, decimalPlaces) =>
  (Math.random() * cardLimit).toFixed(decimalPlaces);

export const getAvailableBalance = (cardLimit, cardBalance, decimalPlaces) =>
  (cardLimit - cardBalance).toFixed(decimalPlaces);

export const getCurrentMonth = () => moment().format("MMMM");

export const calculateDailyPoints = (date) => {
  return null;
};

export const getTransactionDateForRender = (dateString) => {
  const date = moment(dateString, "MM/DD/YYYY");
  const now = moment();
  const yesterday = moment().subtract(1, "day");

  return date.isSame(now, "day")
    ? "Today"
    : date.isSame(yesterday, "day")
    ? "Yesterday"
    : date.isBetween(now.clone().subtract(1, "weeks"), now, null, "[]")
    ? date.format("dddd")
    : dateString;
};
