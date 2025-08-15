import { GalleryVerticalEnd } from "lucide-react"

import { Form } from "@/components/Form.tsx"
import { DataTable } from "@/pages/EmployeeList.tsx";
import {columns, type Employee} from "@/components/table/columns.tsx";

export default function LoginPage() {


    const employees: Employee[] = [
        {
            firstName: "John",
            lastName: "Doe",
            dateOfBirth: "1990-01-01",
            startDate: "2023-01-01",
            street: "123 Main St",
            city: "Anytown",
            state: "CA",
            zipCode: 12345,
            department: "Engineering",
        },
    ]

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
            <DataTable columns={columns} data={employees} />
        </div>


    </>
    )
}
