import { describe, it, expect, vi } from "vitest";
import { getSortingIcon } from "@/components/employeesTable/getSortingIcon.js";
import { render } from "@testing-library/react";

describe("getSortingIcon", () => {
    it("should return the ArrowDown icon", () => {
        const column = { getIsSorted: vi.fn().mockReturnValue("asc") };

        const testResult = getSortingIcon(column);

        render(testResult);

        expect(document.querySelector(".lucide-arrow-down")).not.toBe(null);
    });
    it("should return the ArrowUp icon", () => {
        const column = { getIsSorted: vi.fn().mockReturnValue("desc") };

        const testResult = getSortingIcon(column);

        render(testResult);

        expect(document.querySelector(".lucide-arrow-up")).not.toBe(null);
    });
    it("should return the ArrowUpDown icon", () => {
        const column = {
            getIsSorted: vi.fn().mockReturnValue("defaultValueTest"),
        };

        const testResult = getSortingIcon(column);

        render(testResult);

        expect(document.querySelector(".lucide-arrow-up-down")).not.toBe(null);
    });
});
