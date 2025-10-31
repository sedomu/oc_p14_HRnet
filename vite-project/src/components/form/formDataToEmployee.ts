import type { Employee } from "@/redux.ts";

export default function formDataToEmployee(formData: FormData): Employee {
    const firstName = formData.get("firstName")?.toString();
    const lastName = formData.get("lastName")?.toString();
    const dateOfBirth = formData.get("dateOfBirth")?.toString();
    const startDate = formData.get("startDate")?.toString();
    const street = formData.get("street")?.toString();
    const city = formData.get("city")?.toString();
    const state = formData.get("state")?.toString();
    const zipCode = Number(formData.get("zipCode"));
    const department = formData.get("department")?.toString();

    return {
        firstName: firstName ? firstName : "",
        lastName: lastName ? lastName : "",
        dateOfBirth: dateOfBirth ? dateOfBirth : "",
        startDate: startDate ? startDate : "",
        street: street ? street : "",
        city: city ? city : "",
        state: state ? state : "",
        zipCode: zipCode ? zipCode : 0,
        department: department ? department : "",
    };
}
