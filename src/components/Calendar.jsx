import { useState } from "react"
import CalendarBody from "./CalendarBody"
import CalendarHead from "./CalendarHead"
import './style/Calendar.css'

// TODO: че за индекс
// + TODO: добавить отображение текущего года
// + TODO: calendarHead должен быть отдельно
// TODO: возможность выбирать дни при помощи клика мыши. 
// Выбранные пользователем дни храните как состояние в Calendar. Выделите выбранные дни цветом.
const Calendar = () => {
	const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
	const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
	const [pickedDays, setpickedDays] = useState([])

	console.log(currentYear)

	const handlePrevClick = () => {
		setCurrentMonth(currentMonth - 1)
		if(currentMonth % 12 === 0) {
			setCurrentYear(currentYear - 1)
		}
	}
	
	const handleNextClick = () => {
		setCurrentMonth(currentMonth + 1)	
		if(currentMonth % 12 === 11) {
			setCurrentYear(currentYear + 1)
		}
	}

	const handleDayClick = (e) => {
		// console.log(e.target)
		// e.target.className += ' checked'
	}

	return (
        <div className={'cal'}>
            <CalendarHead
                currentMonth={currentMonth}
                currentYear={currentYear}
                handlePrevClick={handlePrevClick}
                handleNextClick={handleNextClick}
            />
            <CalendarBody
                currentMonthIndex={currentMonth}
                handleDayClick={handleDayClick}
            />
        </div>
    )
}

export default Calendar
