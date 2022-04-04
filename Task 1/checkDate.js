function checkDate(timestamp) {

    //Заменил var на const, т.к. нет смысла выносить эти переменные в глобальную область видимости
    const day = new Date(timestamp * 1000).getDate();
    //Сделать необходимо было писать + 1 , т.к. присваивался предыдуший месяц
    const month = new Date(timestamp * 1000).getMonth() + 1;
    const year = new Date(timestamp * 1000).getFullYear();

    let hour = new Date(timestamp * 1000 ).getHours();

    const current_Date = new Date(Date.now());
    const current_day = current_Date.getDate();
    const current_month = current_Date.getMonth() + 1;
    const currentYear = current_Date.getFullYear();

    let isSameDate = false;

    //здесь повысил удобочитаемость проверки, а также избавился 
    //от бесполезного присваивания к FALSE, т.к. переменная уже равна этому значению
    if (year === currentYear && month === current_month & day === current_day) {
        isSameDate = true
    }

    return {
        //здесь оставлю просто isSameDate использую сокращенную запись присвоения свойств (фишка из ES6)
        isSameDate,
        //исправил 11 на 12, а также добавил сравнение равенства
        dayPeriod: hour >= 12 ? 'pm' : 'am'
    }
}
