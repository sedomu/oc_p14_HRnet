import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useMemo, useState } from 'react'
import {
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    getFilteredRowModel,
    useReactTable
} from '@tanstack/react-table'

export default function EmployeeList() {
    const employees = useSelector(state => state.employees)

    const [sorting, setSorting] = useState([])
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 10,
    })
    const [globalFilter, setGlobalFilter] = useState('')

    // Définition des colonnes
    const columns = useMemo(() => [
        {
            header: 'First Name',
            accessorKey: 'firstName',
            enableSorting: true,
        },
        {
            header: 'Last Name',
            accessorKey: 'lastName',
            enableSorting: true,
        }
    ], [])

    // Configuration de la table
    const table = useReactTable({
        data: employees,
        columns,
        state: { sorting, pagination, globalFilter },
        onSortingChange: setSorting,
        onPaginationChange: setPagination,
        onGlobalFilterChange: setGlobalFilter,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    })

    // Variables utiles pour l'affichage
    const pageIndex = pagination.pageIndex
    const pageSize = pagination.pageSize

    const totalFiltered = table.getPrePaginationRowModel().rows.length
    const totalEntries = table.getCoreRowModel().rows.length

    const start = totalFiltered === 0 ? 0 : pageIndex * pageSize + 1
    const end = Math.min((pageIndex + 1) * pageSize, totalFiltered)

    const totalPages = Math.ceil(totalFiltered / pageSize)
    const pages = []
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
    }
    console.log(pages)

    return <>
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>

            <div className="employee-table_wrapper">
                <div className="employee-table_length">
                    <label>
                        Show
                        <select
                            value={pageSize}
                            onChange={e => table.setPageSize(Number(e.target.value))}
                            style={{ marginLeft: '10px' }}
                        >
                            {[10, 20, 30, 40, 50].map(size => (
                                <option key={size} value={size}>
                                    {size}
                                </option>
                            ))}
                        </select>
                        entries
                    </label>
                </div>
                <div className="employee-table_filter">
                    <label>
                        Search:
                        <input
                            type="text"
                            placeholder="Rechercher..."
                            value={globalFilter ?? ''}
                            onChange={(e) => setGlobalFilter(e.target.value)}
                            style={{ marginBottom: '10px', padding: '5px' }}
                        />
                    </label>
                </div>
                <table className="employee-table">
                    <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th
                                    key={header.id}
                                    onClick={header.column.getToggleSortingHandler()}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {header.isPlaceholder ? null : (
                                        <>
                                            {flexRender(header.column.columnDef.header, header.getContext())}
                                            {{
                                                asc: ' 🔼',
                                                desc: ' 🔽',
                                            }[header.column.getIsSorted()] ?? null}
                                        </>
                                    )}
                                </th>
                            ))}
                        </tr>
                    ))}
                    </thead>
                    <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
                <div className="employee-table_info">
                    <div style={{ marginTop: '5px' }}>
                        Showing {start} to {end} of {totalFiltered} entries
                        {totalFiltered < totalEntries && ` (filtered from ${totalEntries} total entries)`}
                    </div>
                </div>
                <div className="employee-table_paginate">
                    <div style={{ marginTop: '5px' }}>
                        <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>{'Previous'}</button>
                        {pages.map(page => (<button key={page} onClick={() => table.setPageIndex(page - 1)} className={page === pageIndex + 1 ? "active" : ""}>{page}</button>))}
                        <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>{'Next'}</button>
                    </div>
                </div>
            </div>

            {/* Lien retour */}
            <Link to="/" style={{ display: 'block', marginTop: '10px' }}>Home</Link>
        </div>
    </>
}
