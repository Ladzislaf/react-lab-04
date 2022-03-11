const CalendarBody = ({ currentMonthIndex, handleDayClick }) => {
	const dateNow = new Date()

	let prevDate = new Date(dateNow.getFullYear(), currentMonthIndex - 1)
	let currentDate = new Date(dateNow.getFullYear(), currentMonthIndex)
	let nextDate = new Date(dateNow.getFullYear(), currentMonthIndex + 1)

	// че за индекс
	let index = (currentDate.getDay() + 6) % 7

	// количество дней
	let days = (nextDate - currentDate) / (1000 * 3600 * 24)
	let prevDays = 	(currentDate - prevDate) / (1000 * 3600 * 24)

	const ROWS = 6
	const COLS = 7

	let daysMatrix = [], row = [], number = 1 - index

	// числа, которые будут подставляться после всех чисел текущего месяца
	let nextMonthDaysCounter = 1

	// условие проверки текущего дня
	let currentDayCheck =
        currentDate.getMonth() === dateNow.getMonth() &&
        currentDate.getFullYear() === dateNow.getFullYear()

	for (let i = 0; i < ROWS; i++) {
        row = []
        for (let j = 0; j < COLS; j++) {
			// текущий день
			if(number === new Date().getDate() && currentDayCheck){
				row.push(<div key={j} className={'cell curr'} onClick={handleDayClick}>{number}</div>)
				number++
				continue
			}
			if(number <= 0)
				row.push(<div key={j} className={'cell none'} onClick={handleDayClick}>{prevDays + number}</div>)
			else if(number > 0 && number <= days)
				row.push(<div key={j} className={'cell'} onClick={handleDayClick}>{number}</div>)
			else {
				row.push(<div key={j} className={'cell none'} onClick={handleDayClick}>{nextMonthDaysCounter}</div>)
				nextMonthDaysCounter++
			}
			number++
        }
        daysMatrix.push(row)
    }
	
	return (
		<div className={'calBody'}>
			{daysMatrix}
		</div>
    )
}

export default CalendarBody
