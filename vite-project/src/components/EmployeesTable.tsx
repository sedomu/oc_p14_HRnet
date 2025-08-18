import * as React from "react"
import {
    type Column,
    type ColumnDef,
    type FilterFn,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    type SortingState,
    useReactTable,
} from "@tanstack/react-table"
import {ArrowDown, ArrowUp, ArrowUpDown} from "lucide-react"

import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import type {Employee, RootState} from "@/redux.ts";
import {useSelector} from "react-redux";

// ---- Sorting Icon ----
const getSortingIcon = (column: Column<Employee>) => {
    switch (column.getIsSorted()) {
        case "asc":
            return <ArrowDown className="ml-2 h-4 w-4"/>
        case "desc":
            return <ArrowUp className="ml-2 h-4 w-4"/>
        default:
            return <ArrowUpDown className="ml-2 h-4 w-4"/>
    }
}

// ---- Colonnes ----
export const columns: ColumnDef<Employee>[] = [
    {
        accessorKey: "firstName",
        header: ({column}) => (
            <Button
                variant={"ghost"}
                className="bg-transparent hover:bg-transparent hover:text-inherit"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                First Name
                {getSortingIcon(column)}
            </Button>
        ),
    },
    {
        accessorKey: "lastName",
        header: ({column}) => (
            <Button
                variant={"ghost"}
                className="bg-transparent hover:bg-transparent hover:text-inherit"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Last Name
                {getSortingIcon(column)}
            </Button>
        ),
    },
    {
        accessorKey: "dateOfBirth",
        header: ({column}) => (
            <Button
                variant={"ghost"}
                className="bg-transparent hover:bg-transparent hover:text-inherit"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Date of Birth
                {getSortingIcon(column)}
            </Button>
        ),
        cell: ({row}) => (
            <span>{new Date(row.getValue("dateOfBirth")).toLocaleDateString()}</span>
        ),
    },
    {
        accessorKey: "startDate",
        header: ({column}) => (
            <Button
                variant={"ghost"}
                className="bg-transparent hover:bg-transparent hover:text-inherit"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Start Date
                {getSortingIcon(column)}
            </Button>
        ),
        cell: ({row}) => (
            <span>{new Date(row.getValue("startDate")).toLocaleDateString()}</span>
        ),
    },
    {
        accessorKey: "department",
        header: ({column}) => (
            <Button
                variant={"ghost"}
                className="bg-transparent hover:bg-transparent hover:text-inherit"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Department
                {getSortingIcon(column)}
            </Button>
        ),
    },
    {
        accessorKey: "city",
        header: ({column}) => (
            <Button
                variant={"ghost"}
                className="bg-transparent hover:bg-transparent hover:text-inherit"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                City
                {getSortingIcon(column)}
            </Button>
        ),
    },
    {
        accessorKey: "state",
        header: ({column}) => (
            <Button
                variant={"ghost"}
                className="bg-transparent hover:bg-transparent hover:text-inherit"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                State
                {getSortingIcon(column)}
            </Button>
        ),
    },
    {
        accessorKey: "zipCode",
        header: ({column}) => (
            <Button
                variant={"ghost"}
                className="bg-transparent hover:bg-transparent hover:text-inherit"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Zip
                {getSortingIcon(column)}
            </Button>
        ),
    },
]

// ---- Filtre global ----
const globalContains: FilterFn<Employee> = (row, columnId, filterValue) => {
    const search = String(filterValue ?? "").toLowerCase()
    if (!search) return true
    const value = row.getValue(columnId)
    return String(value ?? "").toLowerCase().includes(search)
}

// ---- Table Component ----
export function EmployeesTable() {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [globalFilter, setGlobalFilter] = React.useState("")

    const employees = useSelector((state: RootState) => state.employees)

    const table = useReactTable({
        data: employees,
        columns,
        state: {sorting, globalFilter},
        onSortingChange: setSorting,
        onGlobalFilterChange: setGlobalFilter,
        globalFilterFn: globalContains,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
    })

    const {pageIndex, pageSize} = table.getState().pagination
    const pageStart = pageIndex * pageSize + 1
    const pageEnd = Math.min(pageStart + pageSize - 1, table.getFilteredRowModel().rows.length)
    const filteredCount = table.getFilteredRowModel().rows.length
    const totalCount = employees.length

    return (
        <div className="w-full">

            <div className="flex items-center justify-between">
                {/* Page size select */}
                <div className="flex items-center py-4 space-x-4">
                    <span>Show </span>
                    <Select
                        value={String(pageSize)}
                        onValueChange={(value) => table.setPageSize(Number(value))}
                    >
                        <SelectTrigger className="w-20 bg-background">
                            <SelectValue placeholder="Page size"/>
                        </SelectTrigger>
                        <SelectContent>
                            {[10, 25, 50, 100].map((n) => (
                                <SelectItem key={n} value={String(n)}>
                                    {n}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <span> entries</span>
                </div>


                {/* Filtre global */}
                <div className="flex items-center py-4 space-x-4">
                    <span>Search: </span>
                    <Input
                        value={globalFilter}
                        onChange={(e) => setGlobalFilter(e.target.value)}
                        className="max-w-sm bg-background"
                    />
                </div>
            </div>

            {/* Tableau */}
            <div className="overflow-hidden rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((hg) => (
                            <TableRow key={hg.id}>
                                {hg.headers.map((header) => (
                                    <TableHead key={header.id}
                                               className={header.column.getIsSorted() ? "bg-foreground text-background" : "bg-ring/20"}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(header.column.columnDef.header, header.getContext())}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow key={row.id}>
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id} className="bg-background text-foreground">
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length}
                                           className="h-24 text-center bg-background text-foreground">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            {/* Pagination info */}
            <div
                className="flex items-center justify-between py-4 text-sm text-muted-foreground">
                <div>
                    {globalFilter
                        ? `Showing ${pageStart} to ${pageEnd} of ${filteredCount} entries (filtered from ${totalCount} total entries)`
                        : `Showing ${pageStart} to ${pageEnd} of ${filteredCount} entries`}
                </div>
                {/* Pagination controls */}
                <div className="space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Previous
                    </Button>
                    {Array.from({length: table.getPageCount()}, (_, i) => (
                        <Button
                            key={i}
                            variant={i === pageIndex ? "default" : "outline"}
                            size="sm"
                            onClick={() => table.setPageIndex(i)}
                        >
                            {i + 1}
                        </Button>
                    ))}
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    )
}
