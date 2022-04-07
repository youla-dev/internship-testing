function checkDate(timestamp) {
    //Для наглядности, все названия переменных будут написаны в стиле camelCase

    //Const, потому что значения переменных ниже в функции не будут меняться, зависят только от параметра timestamp
    const  day = new Date(timestamp * 1000).getDate();
    const  month = new Date(timestamp * 1000).getMonth() + 1; //+1, т.к. без него присваивается предыдущий месяц
    const  year = new Date(timestamp * 1000).getFullYear();
    const  hour = new Date(timestamp * 1000).getHours();

    const currentDate = new Date(Date.now());
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();

    let isSameDate = false;

    //для более точного сравнения, используeтся строгое равенство
    //избавляемся от изначального присваивания false, т.к. переменной оно уже присвоено выше
    if (year === currentYear) {
        if (month === currentMonth) {
            isSameDate = day === currentDay;
        }
    }

    return {
        isSameDate: isSameDate,
        dayPeriod: hour > 11 ? 'pm' : 'am'
    }
}

console.log(checkDate(2345789)); //Wed, 28 Jan 1970 03:36:29 GMT, { isSameDate: false, dayPeriod: 'am' }
console.log(checkDate(1649359348)); //Thu, 07 Apr 2022 19:22:28 GMT, { isSameDate: true, dayPeriod: 'pm' }
