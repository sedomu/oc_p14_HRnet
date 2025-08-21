import { cleanup } from "@testing-library/react";
import { afterEach, beforeEach, vi } from "vitest";

export let consoleErrorSpy;

beforeEach(() => {
    consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
    cleanup();
    consoleErrorSpy.mockRestore();
});
