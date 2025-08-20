import baseColumn from "@/components/employeesTable/baseColumnConfiguration.tsx";

import type { columnsDefinition } from "@/components/employeesTable/columnsDefinition.ts";

export default function getColumns(columnsDefinition: columnsDefinition) {
    return columnsDefinition.map((column) =>
        baseColumn(column.accessorKey, column.displayName)
    );
}
