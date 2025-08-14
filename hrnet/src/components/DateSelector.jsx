import DatePicker from 'react-datepicker'
import { getMonth, getYear } from 'date-fns'
import { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'

export default function DateSelector ({ name }) {
    const [selectedDate, setSelectedDate] = useState(null)
    const years = []
    for (let i = 1950; i <= 2050; i++) {
        years.push(i)
    }
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    return <>
        <DatePicker
            onChange={(date) => setSelectedDate(date)}
            dateFormat="MM/dd/yyyy"
            renderCustomHeader={({
                date,
                changeYear,
                changeMonth,
                decreaseMonth,
                increaseMonth,
                prevMonthButtonDisabled,
                nextMonthButtonDisabled,
            }) => (
                <div
                    style={{
                        margin: 10,
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <button onClick={decreaseMonth}
                            disabled={prevMonthButtonDisabled}>
                        {'<'}
                    </button>
                    <button
                        onClick={() => {
                            setSelectedDate(new Date())
                            setOpen(false)
                        }}
                    >
                        Today
                    </button>

                    <select
                        value={months[getMonth(date)]}
                        onChange={({ target: { value } }) =>
                            changeMonth(months.indexOf(value))
                        }
                    >
                        {months.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>

                    <select
                        value={getYear(date)}
                        onChange={({ target: { value } }) => changeYear(value)}
                    >
                        {years.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>


                    <button onClick={increaseMonth}
                            disabled={nextMonthButtonDisabled}>
                        {'>'}
                    </button>
                </div>
            )}
            selected={selectedDate}
            todayButton="Today"
         showMonthYearDropdown/>

        <input id={name} name={name} type="hidden"
               value={selectedDate ? selectedDate.toLocaleDateString('en-US', {
                   year: 'numeric',
                   month: '2-digit',
                   day: '2-digit'
               }) : ''}/>

    </>
}