const findDayOfWeek = (day, month, year) => {
    if (month < 1 || month > 12) return "Invalid month";

    let maxDay = 31;

    if (month === 4 || month === 6 || month === 9 || month === 11) {
        maxDay = 30;
    }

    if (month === 2) {
        const isLeap = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
        maxDay = isLeap ? 29 : 28;
    }

    if (day < 1 || day > maxDay) return "Invalid day";

    const d = new Date(year, month - 1, day).getDay();

    switch (d) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Error";
    }
};

console.log(findDayOfWeek(30, 2, 2026));
