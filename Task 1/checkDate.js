function checkDate(timestamp) {
  const current_Date = new Date();

  // проверим не распарсенные в день,месяц,год таймстэмпы, а их самих
  // получим актуальный таймстемп
  const timestamp1 = Math.round(current_Date.getTime() / 1000);
  //во избежания проблем с округлением будем сравнивать не на прямую, а через эпсилон окрестность
  const isSameDate = Math.abs(timestamp - timestamp1) < 1;
  return {
    isSameDate: isSameDate,
    // получим часы из актульной даты и сравним
    dayPeriod: current_Date.getHours() >= 12 ? "pm" : "am",
  };
}

//console.log(checkDate(Math.round(new Date().getTime() / 1000)));
