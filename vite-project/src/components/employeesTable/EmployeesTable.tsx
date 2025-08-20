import * as React from "react";
import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    type SortingState,
    useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import type { RootState } from "@/redux.ts";
import { useSelector } from "react-redux";

import getColumns from "@/components/employeesTable/getColumns.tsx";

import { columnsDefinition } from "@/components/employeesTable/columnsDefinition.ts";
import { globalSearchFilter } from "@/components/employeesTable/globalSearchFilter.ts";

// ---- employeesTable Component ----
export function EmployeesTable() {
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [globalFilter, setGlobalFilter] = React.useState("");
    const employees = useSelector((state: RootState) => state.employees);

    const table = useReactTable({
        data: employees,
        columns: getColumns(columnsDefinition),
        state: { sorting, globalFilter },
        onSortingChange: setSorting,
        onGlobalFilterChange: setGlobalFilter,
        globalFilterFn: globalSearchFilter,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });

    const { pageIndex, pageSize } = table.getState().pagination;
    const pageStart = pageIndex * pageSize + 1;
    const pageEnd = Math.min(
        pageStart + pageSize - 1,
        table.getFilteredRowModel().rows.length
    );
    const filteredCount = table.getFilteredRowModel().rows.length;
    const totalCount = employees.length;

    return (
        <>
            <div className="w-full">
                <div className="flex items-center justify-between">
                    {/* Page size select */}
                    <div className="flex items-center py-4 space-x-4">
                        <span>Show </span>
                        <Select
                            value={String(pageSize)}
                            onValueChange={(value) =>
                                table.setPageSize(Number(value))
                            }
                        >
                            <SelectTrigger className="w-20 bg-background">
                                <SelectValue placeholder="Page size" />
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

                    {/*  Global Filter */}
                    <div className="flex items-center py-4 space-x-4">
                        <span>Search: </span>
                        <Input
                            value={globalFilter}
                            onChange={(e) => setGlobalFilter(e.target.value)}
                            className="max-w-sm bg-background"
                        />
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-hidden rounded-md border">
                    <Table>
                        <TableHeader>
                            {table.getHeaderGroups().map((hg) => (
                                <TableRow key={hg.id}>
                                    {hg.headers.map((header) => (
                                        <TableHead
                                            key={header.id}
                                            className={
                                                header.column.getIsSorted()
                                                    ? "bg-foreground text-background"
                                                    : "bg-ring/20"
                                            }
                                        >
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                      header.column.columnDef
                                                          .header,
                                                      header.getContext()
                                                  )}
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
                                            <TableCell
                                                key={cell.id}
                                                className="bg-background text-foreground"
                                            >
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell
                                        colSpan={columnsDefinition.length}
                                        className="h-24 text-center bg-background text-foreground"
                                    >
                                        No results.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>

                {/* Pagination info */}
                <div className="flex items-center justify-between py-4 text-sm text-muted-foreground">
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
                        {Array.from(
                            { length: table.getPageCount() },
                            (_, i) => (
                                <Button
                                    key={i}
                                    variant={
                                        i === pageIndex ? "default" : "outline"
                                    }
                                    size="sm"
                                    onClick={() => table.setPageIndex(i)}
                                >
                                    {i + 1}
                                </Button>
                            )
                        )}
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
        </>
    );
}
