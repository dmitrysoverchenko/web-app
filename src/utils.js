import moment from "moment/moment";
import { winterEnd, springEnd, summerEnd, autumnEnd } from "./constants";

export const getCardBalanceValue = (cardLimit, decimalPlaces) =>
  (Math.random() * cardLimit).toFixed(decimalPlaces);

export const getAvailableBalance = (cardLimit, cardBalance, decimalPlaces) =>
  (cardLimit - cardBalance).toFixed(decimalPlaces);

export const getCurrentMonth = () => moment().format("MMMM");

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

export const getRandomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const getSeasonDay = (dayOfYear) => {
  if (dayOfYear <= winterEnd) {
    return dayOfYear + 31;
  }
  if (dayOfYear <= springEnd) {
    return dayOfYear - winterEnd;
  }
  if (dayOfYear <= summerEnd) {
    return dayOfYear - springEnd;
  }
  if (dayOfYear <= autumnEnd) {
    return dayOfYear - summerEnd;
  }
  return dayOfYear - autumnEnd;
};

const getPoints = (dayNumber, prevPoints = 3, prevPrevPoints = 2) => {
  if (dayNumber === 1) {
    return prevPoints >= 1000 ? `${Math.floor(prevPoints / 1000)}K` : prevPoints;
  }

  const newPoints = Math.round(prevPoints + prevPrevPoints * 0.6);

  return getPoints(dayNumber - 1, newPoints, prevPoints);
};

export const calculatePoints = () => {
  const date = moment();
  const dayOfYear = date.dayOfYear();
  const dayNumber = getSeasonDay(dayOfYear);

  return dayNumber === 1 ? 2 : dayNumber === 2 ? 3 : getPoints(dayNumber);
};
