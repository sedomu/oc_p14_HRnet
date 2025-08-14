import { Link } from 'react-router-dom'
import StateSelector from '../components/StateSelector.jsx'
import { useDispatch } from 'react-redux'
import { addEmployee } from '../redux.js'
import Modal from '../components/Modal.jsx'
import { useRef } from 'react'
import DateSelector from '../components/DateSelector.jsx'

export default function Home () {
    const dispatch = useDispatch()

    const modalRef = useRef()

    const saveEmployee = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)

        const data = {
            firstName: formData.get('first-name'),
            lastName: formData.get('last-name'),
            dateOfBirth: formData.get('date-of-birth'),
            startDate: formData.get('start-date'),
            department: formData.get('department'),
            street: formData.get('street'),
            city: formData.get('city'),
            state: formData.get('state'),
            zipCode: formData.get('zip-code')
        }

        dispatch(addEmployee(data))
        modalRef.current.open()
    }

    return <>

        <div className="title">
            <h1>HRnet</h1>
        </div>

        <div className="container">
            <Link to="/employee-list">View Current Employees</Link>
            <h2>Create Employee</h2>
            <form onSubmit={saveEmployee} id="create-employee">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" name="first-name"/>

                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" name="last-name"/>

                <label htmlFor="date-of-birth">Date of Birth</label>
                <DateSelector name="date-of-birth"/>

                <label htmlFor="start-date">Start Date</label>
                <DateSelector name="start-date"/>

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" name="street" type="text"/>

                    <label htmlFor="city">City</label>
                    <input id="city" name="city" type="text"/>

                    <StateSelector/>

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" name="zip-code" type="number"/>
                </fieldset>

                <label htmlFor="department">Department</label>
                <select name="department" id="department">
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Legal</option>
                </select>

                <div className="save-button-wrapper">
                    <button type="submit">Save</button>
                </div>

            </form>
        </div>
        <Modal ref={modalRef}>Employee Created!</Modal>
    </>
}