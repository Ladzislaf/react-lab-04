import {useState} from 'react'
import CalendarBody from './CalendarBody'
import CalendarHead from './CalendarHead'

import './style/Calendar.css'

const CalendarOld = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
    const [pickedDaysList, setPickedDaysList] = useState([])

    const handlePrevClick = () => {
        (currentMonth === 0) ? setCurrentMonth(11) : setCurrentMonth(currentMonth - 1)
        if (currentMonth % 12 === 0) {
            setCurrentYear(currentYear - 1)
        }
    }

    const handleNextClick = () => {
        setCurrentMonth((currentMonth + 1) % 12)
        if (currentMonth % 12 === 11) {
            setCurrentYear(currentYear + 1)
        }
    }

    const handleDayClick = (pickDay) => {
        for (let i = 0; i < pickedDaysList.length; i++) {
            if (pickedDaysList[i].date.toString() === pickDay.date.toString()) {
                let copy = pickedDaysList.slice()
                copy.splice(i, 1)
                setPickedDaysList(copy)
                return
            }
        }
        setPickedDaysList([...pickedDaysList, pickDay])
    }

    return (
        <>
            <div className={'cal'}>
                <CalendarHead
                    currentMonth={currentMonth}
                    currentYear={currentYear}
                    handlePrevClick={handlePrevClick}
                    handleNextClick={handleNextClick}
                />
                <CalendarBody
                    currentMonthIndex={currentMonth}
                    currentYear={currentYear}
                    handleDayClick={handleDayClick}
                    pickedDaysList={pickedDaysList}
                />
            </div>
        </>
    )
}

export default CalendarOld
