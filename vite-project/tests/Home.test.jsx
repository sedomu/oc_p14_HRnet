import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Home } from "lucide-react";
import { RouterProvider } from "react-router-dom";
import { router } from "@/router.jsx";
import { Provider } from "react-redux";
import { store } from "@/redux.js";
import { userEvent } from "@testing-library/user-event";

vi.mock("@/components/form/Form.tsx", () => ({
    Form: ({ onSuccess }) => <button onClick={onSuccess}>Submit Form</button>,
}));

describe("Home", () => {
    it("should render correctly", () => {
        const { container } = render(
            <Provider store={store}>
                <RouterProvider router={router}>
                    <Home />
                </RouterProvider>
            </Provider>
        );

        expect(container).toMatchSnapshot();
    });
    it("should display the dialog box when form is successfully submitted", async () => {
        render(
            <Provider store={store}>
                <RouterProvider router={router}>
                    <Home />
                </RouterProvider>
            </Provider>
        );

        expect(() => screen.getByText("Employee Created!")).toThrow();

        await userEvent.click(screen.getByText("Submit Form"));

        expect(
            document.querySelector(".tiny-react-dialog__content > div")
                .textContent
        ).toBe("Employee Created!");
    });

    it("should close the dialog box when the user closes it (tested because of props drilling)", async () => {
        render(
            <Provider store={store}>
                <RouterProvider router={router}>
                    <Home />
                </RouterProvider>
            </Provider>
        );

        expect(() => screen.getByText("Employee Created!")).toThrow();

        await userEvent.click(screen.getByText("Submit Form"));

        expect(
            document.querySelector(".tiny-react-dialog__content > div")
                .textContent
        ).toBe("Employee Created!");

        await userEvent.click(
            document.querySelector(".tiny-react-dialog__close")
        );

        expect(() => screen.getByText("Employee Created!")).toThrow();
    });
});
