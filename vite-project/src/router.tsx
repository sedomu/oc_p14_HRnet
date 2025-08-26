import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout.jsx";
import Home from "@/pages/Home.tsx";
import EmployeesList from "@/pages/EmployeesList.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/employee-list",
                element: <EmployeesList />,
            },
        ],
    },
]);
