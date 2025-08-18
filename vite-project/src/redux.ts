import {configureStore, createSlice, type PayloadAction} from '@reduxjs/toolkit'
import {MOCKUP_DATA} from "@/config.ts";
import {employeesMockupData} from "@/data/employees_mockup.ts";

export type Employee = {
    firstName: string
    lastName: string
    dateOfBirth: string
    startDate: string
    street: string
    city: string
    state: string
    zipCode: number
    department: string
}

const initialState: Employee[] = []

if (MOCKUP_DATA){
    initialState.push(...employeesMockupData);
}

const employeesSlice = createSlice({
    name: 'employees',
    initialState: initialState,
    reducers: {
        addEmployee: (state, action: PayloadAction<Employee>) => {
            state.push(action.payload)
        }
    }
})

export const store = configureStore({
    reducer: {
        employees: employeesSlice.reducer
    }
})

export const { addEmployee } = employeesSlice.actions

export type RootState = ReturnType<typeof store.getState>;