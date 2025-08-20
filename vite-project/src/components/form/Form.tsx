import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DatePicker } from "@/components/DatePicker.tsx";
import { SelectDropdown } from "@/components/SelectDropdown.tsx";
import {
    departments,
    states,
} from "@/components/form/selectDropdownConfiguration.ts";
import handleSubmit from "@/components/form/handleSubmit.ts";
import { useDispatch } from "react-redux";

type formProps = {
    onSuccess: () => void;
};

export function Form({ onSuccess }: formProps) {
    const dispatch = useDispatch();

    return (
        <div className={cn("flex flex-col gap-6")}>
            <Card>
                <CardHeader className="text-center">
                    <CardTitle className="text-xl">Create Employee</CardTitle>
                </CardHeader>
                <CardContent>
                    <form
                        onSubmit={(e) => handleSubmit(e, onSuccess, dispatch)}
                    >
                        <div className="grid gap-6">
                            <div className="grid gap-6">
                                <div className="grid gap-3">
                                    <Label htmlFor="firstName">
                                        First Name
                                    </Label>
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
                                    <Label htmlFor="dateOfBirth">
                                        Date of Birth
                                    </Label>
                                    <DatePicker
                                        name="dateOfBirth"
                                        dataTestId="dateOfBirth"
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="startDate">
                                        Start Date
                                    </Label>
                                    <DatePicker
                                        name="startDate"
                                        dataTestId="startDate"
                                    />
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
                                    <SelectDropdown
                                        name="state"
                                        options={states}
                                    />
                                </div>

                                <div className="grid gap-3">
                                    <Label htmlFor="zipCode">Zip Code</Label>
                                    <Input
                                        id="zipCode"
                                        type="number"
                                        name="zipCode"
                                        placeholder=""
                                        min={0}
                                        required
                                        className=" file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive appearance-none"
                                        style={{
                                            WebkitAppearance: "none", // Chrome, Safari, Edge
                                            MozAppearance: "textfield", // Firefox
                                        }}
                                    />
                                </div>

                                <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t"></div>

                                <div className="grid gap-3">
                                    <Label htmlFor="department">
                                        Department
                                    </Label>
                                    <SelectDropdown
                                        name="department"
                                        options={departments}
                                    />
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
