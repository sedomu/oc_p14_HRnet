import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout.jsx";
import Home from "@/pages/Home.tsx";
import { lazy, Suspense } from "react";

const EmployeesList = lazy(
    () => import("@/pages/EmployeesList.tsx")
);

const LazyEmployeesList = (
    <Suspense fallback={<div>Employees table is loading...</div>}>
        <EmployeesList />
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
                element: LazyEmployeesList,
            },
        ],
    },
]);
