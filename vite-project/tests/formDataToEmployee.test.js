import { describe, it, expect } from "vitest";
import formDataToEmployee from "@/components/form/formDataToEmployee.js";

describe("formDataToEmployee", () => {
    it("should return employee object", () => {
        let formData = new FormData();
        formData.append("firstName", "John");
        formData.append("lastName", "Doe");
        formData.append("dateOfBirth", "2000-01-01");
        formData.append("startDate", "2022-01-01");
        formData.append("street", "123 Main street");
        formData.append("city", "Anytown");
        formData.append("state", "NY");
        formData.append("zipCode", "12345");
        formData.append("department", "Sales");

        const employee = formDataToEmployee(formData);

        expect(employee.firstName).toBe("John");
        expect(employee.lastName).toBe("Doe");
        expect(employee.dateOfBirth).toBe("2000-01-01");
        expect(employee.startDate).toBe("2022-01-01");
        expect(employee.street).toBe("123 Main street");
        expect(employee.city).toBe("Anytown");
        expect(employee.state).toBe("NY");
        expect(employee.zipCode).toBe(12345);
        expect(employee.department).toBe("Sales");
    });

    it("should return an object with empty strings or 0 values if formData is empty", () => {
        const employee = formDataToEmployee(new FormData());

        expect(employee.firstName).toBe("");
        expect(employee.lastName).toBe("");
        expect(employee.dateOfBirth).toBe("");
        expect(employee.startDate).toBe("");
        expect(employee.street).toBe("");
        expect(employee.city).toBe("");
        expect(employee.state).toBe("");
        expect(employee.zipCode).toBe(0);
        expect(employee.department).toBe("");
    });

    // it("should return null if formData is incomplete", () => {
    //     let formData = new FormData();
    //     formData.append("firstName", "John");
    //     formData.append("lastName", "Doe");
    //     formData.append("dateOfBirth", "2000-01-01");
    //     formData.append("startDate", "2022-01-01");
    //     formData.append("street", "123 Main street");
    //     formData.append("city", "Anytown");
    //     formData.append("state", "NY");
    //     formData.append("zipCode", "12345");
    //     // "department" is missing
    //
    //     const employee = formDataToEmployee(formData);
    //     expect(employee).toBe(null);
    // });

    // it("should return null if zipCode is not a number", () => {
    //     let formData = new FormData();
    //     formData.append("firstName", "John");
    //     formData.append("lastName", "Doe");
    //     formData.append("dateOfBirth", "2000-01-01");
    //     formData.append("startDate", "2022-01-01");
    //     formData.append("street", "123 Main street");
    //     formData.append("city", "Anytown");
    //     formData.append("state", "NY");
    //     formData.append("zipCode", "abc");
    //     formData.append("department", "Sales");
    //     const employee = formDataToEmployee(formData);
    //     expect(employee).toBe(null);
    // });
});
