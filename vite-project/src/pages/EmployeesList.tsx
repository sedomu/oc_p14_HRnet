import { lazy, Suspense } from "react";

const EmployeesTable = lazy(
    () => import("@/components/employeesTable/EmployeesTable.tsx")
);

const LazyEmployeesTable = () => (
    <Suspense fallback={<div>Employees table is loading...</div>}>
        <EmployeesTable />
    </Suspense>
);

export default function EmployeesList() {
    return (
        <>
            <LazyEmployeesTable />
        </>
    );
}
