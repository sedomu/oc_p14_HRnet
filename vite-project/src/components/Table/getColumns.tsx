import baseColumn from "@/components/Table/baseColumnConfiguration.tsx";

import type { columnsDefinition } from "@/components/Table/columnsDefinition.ts";

export default function getColumns(columnsDefinition: columnsDefinition) {
    return columnsDefinition.map((column) =>
        baseColumn(column.accessorKey, column.displayName)
    );
}
