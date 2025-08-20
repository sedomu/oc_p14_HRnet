import type { FilterFn } from "@tanstack/react-table";
import type { Employee } from "@/redux.ts";

export const globalSearchFilter: FilterFn<Employee> = (
    row,
    columnId,
    filterValue
) => {
    const search = String(filterValue ?? "").toLowerCase();
    if (!search) return true;
    const value = row.getValue(columnId);
    return String(value ?? "")
        .toLowerCase()
        .includes(search);
};
