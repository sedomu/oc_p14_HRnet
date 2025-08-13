import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function EmployeeList() {
    const employees = useSelector(state => state.employees)
    console.log(employees)

    return <>
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <table id="employee-table" className="display"></table>
            <Link to="/">Home</Link>
        </div>
    </>
}