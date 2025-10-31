import { describe, it, expect, vi } from "vitest";
import handleSubmit from "../src/components/form/handleSubmit.js";

vi.mock("@/config.ts", () => ({
    MOCKUP_DATA: false,
}));

import { store } from "@/redux.js";

describe("handleSubmit", () => {
    it("should set errors and not call onSuccess or dispatch if form is invalid", () => {
        const preventDefault = vi.fn();
        const data = new FormData();
        const event = { preventDefault, data };
        const setErrors = vi.fn();

        const onSuccess = vi.fn();
        const dispatch = vi.fn();

        handleSubmit(event, onSuccess, dispatch, setErrors);

        expect(setErrors).toHaveBeenCalled();
        expect(onSuccess).not.toHaveBeenCalled();
        expect(dispatch).not.toHaveBeenCalled();
    });

    it("should update redux store", () => {
        const form = document.createElement("form");
        form.innerHTML = `
            <input name="firstName" value="John" />
            <input name="lastName" value="Doe" />
            <input name="dateOfBirth" value="2000-01-01" />
            <input name="startDate" value="2022-01-01" />
            <input name="street" value="123 Main street" />
            <input name="city" value="Anytown" />
            <input name="state" value="NY" />
            <input name="zipCode" value="12345" />
            <input name="department" value="Sales" />
        `;
        const event = {
            preventDefault: vi.fn(),
            currentTarget: form,
        };

        const onSuccess = vi.fn();
        const setErrors = vi.fn();
        const resetForm = vi.fn();

        handleSubmit(event, onSuccess, store.dispatch, setErrors, resetForm);

        const state = store.getState();
        expect(state.employees.length).toBe(1);
        expect(state.employees[0].firstName).toBe("John");
        expect(state.employees[0].lastName).toBe("Doe");
        expect(state.employees[0].dateOfBirth).toBe("2000-01-01");
        expect(state.employees[0].startDate).toBe("2022-01-01");
        expect(state.employees[0].street).toBe("123 Main street");
        expect(state.employees[0].city).toBe("Anytown");
        expect(state.employees[0].state).toBe("NY");
        expect(String(state.employees[0].zipCode)).toBe("12345");
        expect(state.employees[0].department).toBe("Sales");
        expect(onSuccess).toHaveBeenCalled();
        expect(resetForm).toHaveBeenCalled();
        expect(setErrors).not.toHaveBeenCalled();
    });
});
