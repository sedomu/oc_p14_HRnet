import * as React from "react";
import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

type DatePickerProps = {
    name: string;
    dataTestId: string;
    ariaLabel: string;
    value?: Date | undefined;
    onChange?: (date: Date | undefined) => void;
};

export function DatePicker({ name, dataTestId, ariaLabel, value, onChange }: DatePickerProps) {
    const [open, setOpen] = React.useState(false);

    const handleChange = (newDate: Date | undefined) => {
        onChange?.(newDate);
    }

    const toISODateString = (date: Date) => {
        const year = String(date.getFullYear());
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");

        return `${year}-${month}-${day}`;
    };

    return (
        <>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        id="date"
                        className="w-full justify-between font-normal"
                        role="button"
                        aria-label={ariaLabel}
                    >
                        <span>{value ? value.toLocaleDateString() : ""}</span>
                        <ChevronDownIcon />
                    </Button>
                </PopoverTrigger>
                <PopoverContent
                    className="w-auto overflow-hidden p-0"
                    align="end"
                >
                    <Calendar
                        mode="single"
                        selected={value}
                        captionLayout="dropdown"
                        onSelect={(date) => {
                            handleChange(date);
                            setOpen(false);
                        }}
                    />
                </PopoverContent>
            </Popover>
            <input
                type="hidden"
                name={name}
                value={value ? toISODateString(value) : ""}
                data-testid={dataTestId}
            />
        </>
    );
}
