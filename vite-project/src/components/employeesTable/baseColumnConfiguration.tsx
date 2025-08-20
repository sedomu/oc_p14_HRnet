import type { Column } from "@tanstack/react-table";
import type { Employee } from "@/redux.ts";
import { Button } from "@/components/ui/button.tsx";
import { getSortingIcon } from "@/components/employeesTable/getSortingIcon.tsx";

export default function baseColumnConfiguration(
    accessorKey: string,
    displayName: string
) {
    return {
        accessorKey: accessorKey,
        header: ({ column }: { column: Column<Employee> }) => (
            <Button
                variant={"ghost"}
                className="bg-transparent hover:bg-transparent hover:text-inherit"
                onClick={() =>
                    column.toggleSorting(column.getIsSorted() === "asc")
                }
            >
                {displayName}
                {getSortingIcon(column)}
            </Button>
        ),
    };
}
