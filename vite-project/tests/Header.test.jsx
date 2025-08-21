import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "@/components/Header.js";
import { router } from "@/router.js";
import { RouterProvider } from "react-router-dom";
import { store } from "@/redux.js";

describe("<Header/>", () => {
    it("should render correctly (with a first Home button)", async () => {
        render(
            <Provider store={store}>
                <RouterProvider router={router}>
                    <Header />
                </RouterProvider>
            </Provider>
        );

        expect(await screen.getByText("Home").textContent).toBe("Home");
    });
});
