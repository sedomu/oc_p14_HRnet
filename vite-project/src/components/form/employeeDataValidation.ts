export function employeeDataValidation(data: any) {
    const errors: Record<string, string> = {};


    console.log("j'ai bien un data");
    console.log(data);

    if(!data.firstName || data.firstName.length < 2){
        errors.firstName = "First name must be at least 2 characters long";
    }

    console.log(errors);

    return errors;
}