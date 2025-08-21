import { describe, it, expect, vi } from "vitest";
import getColumns from "@/components/employeesTable/getColumns.js";
import * as baseColumnConfiguration from "@/components/employeesTable/baseColumnConfiguration.js";

describe("getColumns", () => {
    it("should return 3 columns", () => {
        const baseColumnMock = vi
            .spyOn(baseColumnConfiguration, "default")
            .mockImplementation((key, displayName) => [key, displayName]);

        const fakeColumns = [
            { accessorKey: "id", displayName: "ID" },
            { accessorKey: "name", displayName: "Name" },
            { accessorKey: "age", displayName: "Age" },
        ];

        const result = getColumns(fakeColumns);

        expect(baseColumnMock).toHaveBeenCalledTimes(3);

        expect(baseColumnMock).toHaveBeenCalledWith("id", "ID");
        expect(baseColumnMock).toHaveBeenCalledWith("name", "Name");
        expect(baseColumnMock).toHaveBeenCalledWith("age", "Age");

        expect(result).toEqual([
            ["id", "ID"],
            ["name", "Name"],
            ["age", "Age"],
        ]);
    });
});
