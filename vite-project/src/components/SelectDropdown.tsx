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
};

export function SelectDropdown({ name, options, ariaLabel }: Props) {
    return (
        <Select name={name}>
            <SelectTrigger className="w-full" aria-label={ariaLabel}>
                <SelectValue placeholder="" />
            </SelectTrigger>
            <SelectContent>
                {options.map((option) => (
                    <SelectItem value={option.key} key={option.key}>
                        {option.name}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
