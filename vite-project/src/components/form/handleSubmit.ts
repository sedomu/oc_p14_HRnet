import type { FormEvent } from "react";
import formDataToEmployee from "@/components/form/formDataToEmployee.ts";
import { addEmployee, store } from "@/redux.ts";

export default function handleSubmit(
    e: FormEvent<HTMLFormElement>,
    onSuccess: () => void,
    dispatch: typeof store.dispatch
) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = formDataToEmployee(formData);

    if (!data) {
        console.error("Formulaire invalide");
        return;
    }

    dispatch(addEmployee(data));

    onSuccess();
}
