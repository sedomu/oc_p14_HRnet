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
};

export function ListSelect({ name, options }: Props) {
    return (
        <Select name={name}>
            <SelectTrigger className="w-full">
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
