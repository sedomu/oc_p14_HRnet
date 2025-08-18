import {configureStore, createSlice, type PayloadAction} from '@reduxjs/toolkit'

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

const employeesSlice = createSlice({
    name: 'employees',
    initialState: [] as Employee[],
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