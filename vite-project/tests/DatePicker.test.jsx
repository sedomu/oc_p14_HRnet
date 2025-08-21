import { describe, it, expect } from "vitest";
import { DatePicker } from "@/components/DatePicker.js";
import { Provider } from "react-redux";
import { store } from "@/redux";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

describe("DatePicker", () => {
    it("should render correctly", () => {
        const { container } = render(
            <Provider store={store}>
                <DatePicker name={"test"} dataTestId={"test"} />
            </Provider>
        );
        expect(container).toMatchSnapshot();
    });
    it("should display date in correct format", async () => {
        render(
            <Provider store={store}>
                <DatePicker name={"test"} dataTestId={"test"} />
            </Provider>
        );

        await userEvent.click(screen.getByRole("button"));
        const yearSelect = await document.querySelector(".rdp-years_dropdown");
        await userEvent.selectOptions(yearSelect, "2022");
        const monthSelect = await document.querySelector(
            ".rdp-months_dropdown"
        );
        await userEvent.selectOptions(monthSelect, "May");
        await userEvent.click(await screen.getByText("15"));

        expect(screen.getByTestId("test").value).toBe("2022-05-15");
    });
});
