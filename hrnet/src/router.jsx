import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout.jsx'
import Home from './pages/Home.jsx'
import EmployeeList from './pages/EmployeeList.jsx'

export const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                { path: '/', element: <Home /> },
                { path: '/employee-list', element: <EmployeeList /> }
            ]
        }
    ])