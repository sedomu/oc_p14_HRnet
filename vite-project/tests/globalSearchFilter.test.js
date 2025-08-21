import { describe, it, expect, vi } from "vitest";
import { globalSearchFilter } from "@/components/employeesTable/globalSearchFilter";

// it is a simple function whereas critical not to hide entries when filtering
// this globalSearchFilter is the same as the shadcn/tanstack documentation
// meanwhile, these tests can demonstrate this kind of function
// those tests can be easily written by LLM, so that's the case here

describe("globalSearchFilter (tests critiques)", () => {
    const testCases = [
        { value: "Alice", filter: "alice", expected: true },
        { value: "Alice", filter: "ALICE", expected: true },
        { value: "Alice", filter: "Ali", expected: true },
        { value: "Bob", filter: "alice", expected: false },
        { value: null, filter: "alice", expected: false },
        { value: undefined, filter: "alice", expected: false },
        { value: "Charlie", filter: "", expected: true },
        { value: "Charlie", filter: null, expected: true },
        { value: "Charlie", filter: undefined, expected: true },
    ];

    testCases.forEach(({ value, filter, expected }) => {
        it(`returns ${expected} for value=${String(value)} and filter=${String(filter)}`, () => {
            const row = { getValue: vi.fn(() => value) };
            expect(globalSearchFilter(row, "anyColumn", filter)).toBe(expected);
        });
    });
});
