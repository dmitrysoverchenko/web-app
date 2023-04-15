import moment from "moment/moment";

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

  export const calculatePoints = () => {
    const date = new Date("2023-01-01");
    const month = date.getMonth();
    const day = date.getDate();
  
    let dayNumber = null;
    let season = null;
  
    switch (month) {
      case 0:
        dayNumber = day + 31;
        season = "Winter";
        break;
      case 1:
        dayNumber = day + 31 + 31;
        season = "Winter";
        break;
      case 2:
        dayNumber = day;
        season = "Spring";
        break;
      case 3:
        dayNumber = day + 31;
        season = "Spring";
        break;
      case 4:
        dayNumber = day + 31 + 30;
        season = "Spring";
        break;
      case 5:
        dayNumber = day;
        season = "Summer";
        break;
      case 6:
        dayNumber = day + 30;
        season = "Summer";
        break;
      case 7:
        dayNumber = day + 30 + 31;
        season = "Summer";
        break;
      case 8:
        dayNumber = day;
        season = "Fall";
        break;
      case 9:
        dayNumber = day + 30;
        season = "Fall";
        break;
      case 10:
        dayNumber = day + 31 + 30;
        season = "Fall";
        break;
      case 11:
        dayNumber = day;
        season = "Winter";
        break;
      default:
        dayNumber = null;
        season =  null;
        break;
    }
  
    let currentPoints = 0;
  
    if (dayNumber === 1) {
      currentPoints = 2;
    } else if (dayNumber === 2) {
      currentPoints = 3;
    } else {
      let prevPrevPoints = 2;
      let prevPoints = 3;
  
      for (let i = 3; i <= dayNumber; i++) {
        currentPoints = Math.round(prevPoints * 1.0 + prevPrevPoints * 0.6);
        prevPrevPoints = prevPoints;
        prevPoints = currentPoints;
      }
  
      if (currentPoints >= 1000) {
        currentPoints = Math.floor(currentPoints / 1000) + "K";
      }
    }
  
    return currentPoints;
  };