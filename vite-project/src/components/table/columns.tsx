"use client"

import type {ColumnDef} from "@tanstack/react-table"

export type Employee = {
    firstName: string
    lastName: string
    dateOfBirth: string
    startDate: string
    street: string
    city: string
    state: string
    zipCode: number
    department: string
}

export const columns: ColumnDef<Employee>[] = [
    {
        accessorKey: "firstName",
        header: "First Name",
    },
    {
        accessorKey: "lastName",
        header: "Last Name",
    },
    {
        accessorKey: "startDate",
        header: "Start Date",
    },
    {
        accessorKey: "department",
        header: "Department",
    },
    {
        accessorKey: "dateOfBirth",
        header: "Date of Birth",
    },
    {
        accessorKey: "street",
        header: "Street",
    },
    {
        accessorKey: "city",
        header: "City",
    },
    {
        accessorKey: "state",
        header: "State",
    },
    {
        accessorKey: "zipCode",
        header: "Zip Code",
    },
]