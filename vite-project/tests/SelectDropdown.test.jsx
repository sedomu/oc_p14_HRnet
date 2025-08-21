import { describe, it, expect } from "vitest";
import { SelectDropdown } from "@/components/SelectDropdown.tsx";
import { render } from "@testing-library/react";

describe("<SelectDropdown/>", () => {
    it("should render correctly", () => {
        const { container } = render(
            <SelectDropdown
                name="test"
                options={[
                    {
                        name: "name",
                        key: "key",
                    },
                ]}
            />
        );
        expect(container).toMatchSnapshot();
    });
});
