// вынес константу за функцию, изменил нейминг
const currentDate = new Date(Date.now());

function checkDate(timestamp) {
    // проверка на тип данных
    if (!(typeof timestamp === 'number')) return 'error'; 
    // изменил var на let, чтобы переменная использовалась только в функции
    // вынес new Date(timestamp * 1000) отдельно, чтобы каждый раз не создавать объект
    let inputDate = new Date(timestamp * 1000);

    let isSameDate = false;

	// изменил условие на более понятное
    if (
      currentDate.getFullYear() === inputDate.getFullYear() &&
      currentDate.getMonth() === inputDate.getMonth() &&
      currentDate.getDay() === inputDate.getDay()
    ) {
      isSameDate = true;
    }

    return {
        isSameDate: isSameDate,
        // hours >= 12 делает более понятными намерения
        dayPeriod: inputDate.getHours() >= 12 ? 'pm' : 'am'
    }
}