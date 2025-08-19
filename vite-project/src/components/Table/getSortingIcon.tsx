import type { Employee } from "@/redux.ts";
import type { Column } from "@tanstack/react-table";
import { ArrowUp, ArrowDown, ArrowUpDown } from "lucide-react";

export const getSortingIcon = (column: Column<Employee>) => {
    switch (column.getIsSorted()) {
        case "asc":
            return <ArrowDown className="ml-2 h-4 w-4" />;
        case "desc":
            return <ArrowUp className="ml-2 h-4 w-4" />;
        default:
            return <ArrowUpDown className="ml-2 h-4 w-4" />;
    }
};
