import type { FormEvent } from "react";
import formDataToEmployee from "@/components/form/formDataToEmployee.ts";
import { addEmployee, store } from "@/redux.ts";
import {
    employeeDataValidation
} from "@/components/form/employeeDataValidation.ts";

export default function handleSubmit(
    e: FormEvent<HTMLFormElement>,
    onSuccess: () => void,
    dispatch: typeof store.dispatch,
    setErrors: (errors: Record<string, string>) => void
) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = formDataToEmployee(formData);

    console.log("==============handleSubmit=====================");
    console.log(data);

    const errors = employeeDataValidation(data);

    if (Object.keys(errors).length > 0) {
        setErrors(errors);
        console.log("j'ai bien des erreurs to set")
        return;
    }

    if (!data) {
        console.error("Formulaire invalide");
        return;
    }

    dispatch(addEmployee(data));

    onSuccess();
}
