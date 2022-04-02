function checkDate(timestamp) {
    // Если нам требуется просто сравнить текущую дату и дату из timestamp мы просто поделим текущий timestamp и входной
    // На количество секунд в одном дне и отбросим все числа после запятой тем самым отбросив не целые секунды которые не влияли на дату

    let currentTimestamp = Date.now()/1000 // Находим текущий timestamp

    let timestampDate = Math.trunc(timestamp/86400) // Находим разряды отвечающие за дату в timestamp входном
    let currentTimestampDate = Math.trunc(currentTimestamp/86400) // Находим разряды отвечающие за дату в timestamp текущем
    
    let hour = new Date(timestamp*1000).getHours(); // Тут мы берем целые часы для проверки PM или AM

    // Остается сравнить и получить результат
    return {
        isSameDate: (timestampDate === currentTimestampDate) ? true : false,
        dayPeriod: hour >= 12 ? 'pm' : 'am'
    }
}
