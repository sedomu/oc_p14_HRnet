import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

type Props = {
    name: string;
    options: {
        name: string;
        key: string;
    }[];
    ariaLabel: string;
    value?: string;
    onChange?: (value: string) => void;
};

export function SelectDropdown({
    name,
    options,
    ariaLabel,
    value,
    onChange,
}: Props) {
    return (
        <Select
            name={name}
            value={value || "error_value"}
            onValueChange={onChange}
        >
            <SelectTrigger className="w-full" aria-label={ariaLabel}>
                <SelectValue placeholder="" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="error_value" disabled></SelectItem>
                {options.map((option) => (
                    <SelectItem value={option.key} key={option.key}>
                        {option.name}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
