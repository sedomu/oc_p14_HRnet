import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Form } from "@/components/form/Form";
import { Provider } from "react-redux";
import { store } from "@/redux";

import { userEvent } from "@testing-library/user-event";

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
    it("should update redux's store", async () => {
        render(
            <Provider store={store}>
                <Form onSuccess={() => {}}></Form>
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

        const state = store.getState();
        expect(state.employees.length).toBe(1);
    });
});
