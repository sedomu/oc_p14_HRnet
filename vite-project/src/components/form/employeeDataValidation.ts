import {
    departments,
    states,
} from "@/components/form/selectDropdownConfiguration.ts";
import type { Employee } from "@/redux.ts";

export function employeeDataValidation(data: Employee) {
    const errors: Record<string, string> = {};

    // defining dates
    const startDate = new Date(data.startDate);
    const minStartDate = new Date("2020-01-01");
    const minDateOfBirth = new Date(
        startDate.getFullYear() - 16,
        startDate.getMonth(),
        startDate.getDate()
    );
    const dateOfBirth = new Date(data.dateOfBirth);

    // data validation
    if (data.firstName.length < 2) {
        errors.firstName = "First name must be at least 2 characters long";
    }

    if (data.lastName.length < 2) {
        errors.lastName = "Last name must be at least 2 characters long";
    }

    if (isNaN(startDate.getTime()) || startDate < minStartDate) {
        errors.startDate = "Start date must be at least 2020-01-01";
    }

    if (isNaN(dateOfBirth.getTime()) || dateOfBirth > minDateOfBirth) {
        errors.dateOfBirth =
            "Employee must be at least 16 years old when starting";
    }

    if (data.street.length < 3) {
        errors.street = "Street must be at least 3 characters long";
    }

    if (data.city.length < 2) {
        errors.city = "City must be at least 2 character long";
    }

    if (!states.some((state) => state.key === data.state)) {
        errors.state = "State must be a valid state";
    }

    if (data.zipCode.toString().length !== 5) {
        errors.zipCode = "Zip code must be 5 digits long";
    }

    if (!departments.some((department) => department.key === data.department)) {
        errors.department = "Department must be a valid department";
    }

    return errors;
}
