import type { Employee } from "@/redux.ts";

export default function formDataToEmployee(
    formData: FormData
): Employee | null {
    const firstName = formData.get("firstName")?.toString();
    const lastName = formData.get("lastName")?.toString();
    const dateOfBirth = formData.get("dateOfBirth")?.toString();
    const startDate = formData.get("startDate")?.toString();
    const street = formData.get("street")?.toString();
    const city = formData.get("city")?.toString();
    const state = formData.get("state")?.toString();
    const zipCodeStr = formData.get("zipCode")?.toString();
    const department = formData.get("department")?.toString();

    if (
        !firstName ||
        !lastName ||
        !dateOfBirth ||
        !startDate ||
        !street ||
        !city ||
        !state ||
        !zipCodeStr ||
        !department
    ) {
        return null;
    }

    const zipCode = Number(zipCodeStr);
    if (Number.isNaN(zipCode)) return null;

    return {
        firstName,
        lastName,
        dateOfBirth,
        startDate,
        street,
        city,
        state,
        zipCode,
        department,
    };
}
