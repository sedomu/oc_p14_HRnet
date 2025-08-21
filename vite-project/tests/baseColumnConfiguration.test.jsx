import { describe, it, expect, vi } from "vitest";
import baseColumnConfiguration from "@/components/employeesTable/baseColumnConfiguration.js";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

describe("Base column configuration", () => {
    it("should be able to configure a column", () => {
        const accessorKey = "testAccessorKey";
        const displayName = "testDisplayName";

        const result = baseColumnConfiguration(accessorKey, displayName);
        expect(result.accessorKey).toBe(accessorKey);
        expect(typeof result.header).toBe("function");

        const fakeColumn = {
            toggleSorting: vi.fn(),
            getIsSorted: vi.fn().mockReturnValue("asc"),
        };
        const { container } = render(
            <>{result.header({ column: fakeColumn })}</>
        );
        expect(container.textContent).toBe(displayName);

        expect(container).toMatchSnapshot();
    });
    it("should be able to launch sorting method when clicked", async () => {
        const toggleSorting = vi.fn();
        const getIsSorted = vi.fn().mockReturnValue("asc");

        const fakeColumn = { toggleSorting, getIsSorted };

        const config = baseColumnConfiguration(
            "testAccessorKey",
            "Test Column"
        );

        render(<>{config.header({ column: fakeColumn })}</>);

        const button = screen.getByText("Test Column");

        await userEvent.click(button);

        expect(toggleSorting).toHaveBeenCalledWith(true);
    });
});
