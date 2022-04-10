function checkDate(timestamp) {
    //Сделал ограничение на тип параметра timestamp

    if (typeof timestamp !== "number") {
        throw new Error("expected number");
    }

    // Заменил ключевое слово var на const, потому что var - устаревший способ обявления переменных,
    // и значения переменных не будут изменяться

    // Использовал вместо многочисленных вызовов методов для получения отдельных компонентов даты
    // метод toLocaleDateString с соответствующими опциями
    // Это решение вносит большей читаемости кода

    const LOCALE_CODE = "en-US";

    const DATE_OPTIONS = {
        day: "numeric",
        month: "numeric",
        year: "numeric",
    };

    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const localeDate = date.toLocaleDateString(LOCALE_CODE, DATE_OPTIONS);

    //Избавился от конструкции new Date(Date.now()), так как такая конструкция бессмысленна

    const currentDate = new Date();
    const currentLocaleDate = currentDate.toLocaleDateString(
        LOCALE_CODE,
        DATE_OPTIONS
    );

    //Избавился от конструкции if для большей читаемости логического выражения

    const isSameDate = localeDate === currentLocaleDate;

    //pm начинается с 12 часов

    const dayPeriod = hours >= 12 ? "pm" : "am";

    //Вынес логику за пределы return

    return {
        isSameDate,
        dayPeriod,
    };
}
