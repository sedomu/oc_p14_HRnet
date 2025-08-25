import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout.jsx";
import Home from "@/pages/Home.tsx";
import { lazy, Suspense } from "react";

const EmployeesTable = lazy(
    () => import("@/components/employeesTable/EmployeesTable.tsx")
);

const LazyEmployeesTable = (
    <Suspense fallback={<div>Employees table is loading...</div>}>
        <EmployeesTable />
    </Suspense>
);

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <Home /> },
            {
                path: "/employee-list",
                element: LazyEmployeesTable,
            },
        ],
    },
]);
