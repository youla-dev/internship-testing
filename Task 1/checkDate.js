function checkDate(timestamp) {
    var day = new Date(timestamp * 1000).getDate();
    var month = new Date(timestamp * 1000).getMonth();
    var year = new Date(timestamp * 1000).getFullYear();
    var hour = new Date(timestamp * 1000).getHours();

    const current_Date = new Date(Date.now());
    const current_day = current_Date.getDate();
    const current_month = current_Date.getMonth() + 1;
    const currentYear = current_Date.getFullYear();

    let isSameDate = false;

    if (year == currentYear) {
        if (month == current_month) {
            if (day == current_day) {
                isSameDate = true;
            } else {
                isSameDate = false;
            }
        }
    }

    return {
        isSameDate: isSameDate,
        dayPeriod: hour > 11 ? 'pm' : 'am'
    }
}
