import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Form } from "@/components/form/Form";
import { Provider } from "react-redux";
import { store } from "@/redux";
import { userEvent } from "@testing-library/user-event";

vi.mock("@/components/form/handleSubmit.ts", () => ({
    default: vi.fn(),
}));

import handleSubmit from "@/components/form/handleSubmit.js";

describe("<Form/>", () => {
    it("should render title", () => {
        render(
            <Provider store={store}>
                <Form onSuccess={() => {}}></Form>
            </Provider>
        );
        const createEmployeeTitle = screen.getByText("Create Employee");
        expect(createEmployeeTitle.textContent).toBe("Create Employee");
    });
    it("should call handleSubmit when form is submitted", async () => {
        const onSuccess = vi.fn();

        render(
            <Provider store={store}>
                <Form onSuccess={onSuccess} />
            </Provider>
        );

        await userEvent.type(screen.getByLabelText("First Name"), "John");
        await userEvent.type(screen.getByLabelText("Last Name"), "Doe");
        await userEvent.type(screen.getByTestId("dateOfBirth"), "2000-01-01");
        await userEvent.type(screen.getByTestId("startDate"), "2022-01-01");
        await userEvent.type(
            screen.getByLabelText("Street"),
            "123 Main street"
        );
        await userEvent.type(screen.getByLabelText("City"), "Anytown");
        await userEvent.click(screen.getByText("New York"));
        await userEvent.type(screen.getByLabelText("Zip Code"), "12345");
        await userEvent.click(screen.getByText("Sales"));
        await userEvent.click(screen.getByText("Save"));

        expect(handleSubmit).toHaveBeenCalled();
    });
});
