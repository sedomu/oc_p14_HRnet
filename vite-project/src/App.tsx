import { GalleryVerticalEnd } from "lucide-react"

import { Form } from "@/components/Form.tsx"
import {EmployeesTable} from "@/components/testChaton.tsx";
import Dialog from "@/components/Dialog/Dialog.tsx";

export default function LoginPage() {


    // const employees: Employee[] = [
    //     {
    //         firstName: "John",
    //         lastName: "Doe",
    //         dateOfBirth: "1990-01-01",
    //         startDate: "2023-01-01",
    //         street: "123 Main St",
    //         city: "Anytown",
    //         state: "CA",
    //         zipCode: 12345,
    //         department: "Engineering",
    //     },
    //     {
    //         firstName: "Seb",
    //         lastName: "Seg",
    //         dateOfBirth: "1994-12-12",
    //         startDate: "2025-04-24",
    //         street: "456 Second St",
    //         city: "Everytown",
    //         state: "ME",
    //         zipCode: 54321,
    //         department: "Legal",
    //     },
    // ]

    return (<>
        <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
            <div className="flex w-full max-w-sm flex-col gap-6">
                <a href="#" className="flex items-center gap-2 self-center font-medium">
                    <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
                        <GalleryVerticalEnd className="size-4" />
                    </div>
                    Health Wealth
                </a>
                <Form />
            </div>
            <EmployeesTable />

        </div>

<Dialog />
    </>
    )
}
