import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {DatePicker} from "@/components/DatePicker.tsx";
import {SelectState} from "@/components/SelectState.tsx";
import type {FormEvent} from "react";
import { useDispatch } from "react-redux";
import {addEmployee, type Employee} from "@/redux.ts";

type formProps = {
    className?: string;
    onSuccess: () => void;
}

function formDataToEmployee(formData: FormData): Employee | null {
    const firstName = formData.get("firstName")?.toString();
    const lastName = formData.get("lastName")?.toString();
    const dateOfBirth = formData.get("dateOfBirth")?.toString();
    const startDate = formData.get("startDate")?.toString();
    const street = formData.get("street")?.toString();
    const city = formData.get("city")?.toString();
    const state = formData.get("state")?.toString();
    const zipCodeStr = formData.get("zipCode")?.toString();
    const department = formData.get("department")?.toString();

    // Vérification des champs obligatoires
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

export function Form({ className, onSuccess }: formProps) {

    const states = [
        {
            "name": "Alabama",
            "key": "AL"
        },
        {
            "name": "Alaska",
            "key": "AK"
        },
        {
            "name": "American Samoa",
            "key": "AS"
        },
        {
            "name": "Arizona",
            "key": "AZ"
        },
        {
            "name": "Arkansas",
            "key": "AR"
        },
        {
            "name": "California",
            "key": "CA"
        },
        {
            "name": "Colorado",
            "key": "CO"
        },
        {
            "name": "Connecticut",
            "key": "CT"
        },
        {
            "name": "Delaware",
            "key": "DE"
        },
        {
            "name": "District Of Columbia",
            "key": "DC"
        },
        {
            "name": "Federated States Of Micronesia",
            "key": "FM"
        },
        {
            "name": "Florida",
            "key": "FL"
        },
        {
            "name": "Georgia",
            "key": "GA"
        },
        {
            "name": "Guam",
            "key": "GU"
        },
        {
            "name": "Hawaii",
            "key": "HI"
        },
        {
            "name": "Idaho",
            "key": "ID"
        },
        {
            "name": "Illinois",
            "key": "IL"
        },
        {
            "name": "Indiana",
            "key": "IN"
        },
        {
            "name": "Iowa",
            "key": "IA"
        },
        {
            "name": "Kansas",
            "key": "KS"
        },
        {
            "name": "Kentucky",
            "key": "KY"
        },
        {
            "name": "Louisiana",
            "key": "LA"
        },
        {
            "name": "Maine",
            "key": "ME"
        },
        {
            "name": "Marshall Islands",
            "key": "MH"
        },
        {
            "name": "Maryland",
            "key": "MD"
        },
        {
            "name": "Massachusetts",
            "key": "MA"
        },
        {
            "name": "Michigan",
            "key": "MI"
        },
        {
            "name": "Minnesota",
            "key": "MN"
        },
        {
            "name": "Mississippi",
            "key": "MS"
        },
        {
            "name": "Missouri",
            "key": "MO"
        },
        {
            "name": "Montana",
            "key": "MT"
        },
        {
            "name": "Nebraska",
            "key": "NE"
        },
        {
            "name": "Nevada",
            "key": "NV"
        },
        {
            "name": "New Hampshire",
            "key": "NH"
        },
        {
            "name": "New Jersey",
            "key": "NJ"
        },
        {
            "name": "New Mexico",
            "key": "NM"
        },
        {
            "name": "New York",
            "key": "NY"
        },
        {
            "name": "North Carolina",
            "key": "NC"
        },
        {
            "name": "North Dakota",
            "key": "ND"
        },
        {
            "name": "Northern Mariana Islands",
            "key": "MP"
        },
        {
            "name": "Ohio",
            "key": "OH"
        },
        {
            "name": "Oklahoma",
            "key": "OK"
        },
        {
            "name": "Oregon",
            "key": "OR"
        },
        {
            "name": "Palau",
            "key": "PW"
        },
        {
            "name": "Pennsylvania",
            "key": "PA"
        },
        {
            "name": "Puerto Rico",
            "key": "PR"
        },
        {
            "name": "Rhode Island",
            "key": "RI"
        },
        {
            "name": "South Carolina",
            "key": "SC"
        },
        {
            "name": "South Dakota",
            "key": "SD"
        },
        {
            "name": "Tennessee",
            "key": "TN"
        },
        {
            "name": "Texas",
            "key": "TX"
        },
        {
            "name": "Utah",
            "key": "UT"
        },
        {
            "name": "Vermont",
            "key": "VT"
        },
        {
            "name": "Virgin Islands",
            "key": "VI"
        },
        {
            "name": "Virginia",
            "key": "VA"
        },
        {
            "name": "Washington",
            "key": "WA"
        },
        {
            "name": "West Virginia",
            "key": "WV"
        },
        {
            "name": "Wisconsin",
            "key": "WI"
        },
        {
            "name": "Wyoming",
            "key": "WY"
        }
    ];
    const departments = [
        {
            "name": "Sales",
            "key": "Sales"
        },
        {
            "name": "Marketing",
            "key": "Marketing"
        },
        {
            "name": "Engineering",
            "key": "Engineering"
        },
        {
            "name": "Human Resources",
            "key": "Human Resources"
        },
        {
            "name": "Legal",
            "key": "Legal"
        },
    ];

    const dispatch = useDispatch();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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

    return (
        <div className={cn("flex flex-col gap-6", className)}>
            <Card>
                <CardHeader className="text-center">
                    <CardTitle className="text-xl">Welcome back</CardTitle>
                    <CardDescription>
                        Replicate the HRnet UI
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="grid gap-6">

                            <div className="grid gap-6">
                                <div className="grid gap-3">
                                    <Label htmlFor="firstName">First Name</Label>
                                    <Input
                                        id="firstName"
                                        type="text"
                                        placeholder=""
                                        name="firstName"
                                        required
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="lastName">Last Name</Label>
                                    <Input
                                        id="lastName"
                                        type="text"
                                        placeholder=""
                                        name="lastName"
                                        required
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="dateOfBirth">Date of Birth</Label>
                                    <DatePicker name="dateOfBirth"/>
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="startDate">Start Date</Label>
                                    <DatePicker name="startDate" />
                                </div>
                                <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                                    <span className="bg-card text-muted-foreground relative z-10 px-2">
                                        Address
                                    </span>
                                </div>

                                <div className="grid gap-3">
                                    <Label htmlFor="street">Street</Label>
                                    <Input
                                        id="street"
                                        type="text"
                                        placeholder=""
                                        name="street"
                                        required
                                    />
                                </div>

                                <div className="grid gap-3">
                                    <Label htmlFor="city">City</Label>
                                    <Input
                                        id="city"
                                        type="text"
                                        placeholder=""
                                        name="city"
                                        required
                                    />
                                </div>

                                <div className="grid gap-3">
                                    <Label htmlFor="state">State</Label>
                                    <SelectState name="state" options={states} />
                                </div>

                                <div className="grid gap-3">
                                    <Label htmlFor="zipCode">Zip Code</Label>
                                    <Input
                                        id="zipCode"
                                        type="number"
                                        placeholder=""
                                        name="zipCode"
                                        min={0}
                                        required
                                    />
                                </div>

                                <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t"></div>

                                <div className="grid gap-3">
                                    <Label htmlFor="department">Department</Label>
                                    <SelectState name="department" options={departments} />
                                </div>


                                <Button type="submit" className="w-full">
                                    Save
                                </Button>
                            </div>

                        </div>
                    </form>
                </CardContent>
            </Card>

        </div>
    );
}
