"use client"

import * as React from "react"
import {ChevronDownIcon} from "lucide-react"

import {Button} from "@/components/ui/button"
import {Calendar} from "@/components/ui/calendar"

import {Popover, PopoverContent, PopoverTrigger,} from "@/components/ui/popover"

type DatePickerProps = {
    name: string
}

export function DatePicker({name}: DatePickerProps) {
    const [open, setOpen] = React.useState(false)
    const [date, setDate] = React.useState<Date | undefined>(undefined)

    return (<>


            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        id="date"
                        className="w-full justify-between font-normal"
                    >
                        <span>{date ? date.toLocaleDateString() : ""}</span>
                        <ChevronDownIcon/>
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto overflow-hidden p-0"
                                align="end">
                    <Calendar
                        mode="single"
                        selected={date}
                        captionLayout="dropdown"
                        onSelect={(date) => {
                            setDate(date)
                            setOpen(false)
                        }}
                    />
                </PopoverContent>
            </Popover>
            <input type="hidden" name={name}
                   value={date ? date.toLocaleDateString("en-US", {
                       year: 'numeric',
                       month: '2-digit',
                       day: '2-digit'
                   }) : ""}/>
        </>

    )
}
