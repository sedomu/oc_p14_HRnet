import { configureStore, createSlice } from '@reduxjs/toolkit'

const employeesSlice = createSlice({
    name: 'employees',
    initialState: [],
    reducers: {
        addEmployee: (state, action) => {
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