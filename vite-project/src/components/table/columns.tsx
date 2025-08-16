"use client"

import type {ColumnDef} from "@tanstack/react-table"

import {ArrowUpDown} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";

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

const sortingHeader = (label: string) => {
    return ({ column }: { column: any }) => (
        <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
            {label}
            <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
    )
}

export const columns: ColumnDef<Employee>[] = [
    {
        accessorKey: "firstName",
        header: sortingHeader("First Name"),
    },
    {
        accessorKey: "lastName",
        header: sortingHeader("Last Name"),
    },
    {
        accessorKey: "startDate",
        header: sortingHeader("Start Date"),
    },
    {
        accessorKey: "department",
        header: sortingHeader("Department"),
    },
    {
        accessorKey: "dateOfBirth",
        header: sortingHeader("Date of Birth"),
    },
    {
        accessorKey: "street",
        header: sortingHeader("Street"),
    },
    {
        accessorKey: "city",
        header: sortingHeader("City"),
    },
    {
        accessorKey: "state",
        header: sortingHeader("State"),
    },
    {
        accessorKey: "zipCode",
        header: sortingHeader("Zip Code"),
    },
]