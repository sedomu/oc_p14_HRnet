import { describe, it, expect, vi } from "vitest";
import {
    render,
    screen,
    waitForElementToBeRemoved,
} from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "@/redux.ts";
import EmployeesList from "@/pages/EmployeesList.tsx";

vi.mock("@/config.ts", () => ({
    MOCKUP_DATA: true,
}));

// Global snapshot test is reasonable here because:
// - EmployeesTable is essentially a TanStack React Table with standard rendering logic
// - Child components (buttons, dialogs, icons) are already unit-tested
// - Mockup data from the store ensures a stable snapshot; a separated ensures mockup data is not changed

describe("EmployeesTable", () => {
    it("should render correctly with project's mockup data", async () => {
        const { container } = render(
            <Provider store={store}>
                <EmployeesList />
            </Provider>
        );

        await waitForElementToBeRemoved(() =>
            screen.getByText("Employees table is loading...")
        );

        expect(container).toMatchSnapshot();
    });
});
