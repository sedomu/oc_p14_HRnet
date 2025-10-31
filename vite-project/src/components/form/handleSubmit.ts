import type { FormEvent } from "react";
import formDataToEmployee from "@/components/form/formDataToEmployee.ts";
import { addEmployee, store } from "@/redux.ts";
import { employeeDataValidation } from "@/components/form/employeeDataValidation.ts";

export default function handleSubmit(
    e: FormEvent<HTMLFormElement>,
    onSuccess: () => void,
    dispatch: typeof store.dispatch,
    setErrors: (errors: Record<string, string>) => void
) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = formDataToEmployee(formData);

    const errors = employeeDataValidation(data);

    if (Object.keys(errors).length > 0) {
        setErrors(errors);
        return;
    }

    // reset form
    setErrors({});
    e.currentTarget.reset();

    dispatch(addEmployee(data));

    onSuccess();
}
