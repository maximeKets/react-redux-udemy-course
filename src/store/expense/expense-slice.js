import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
    name: "expenseSlice",
    initialState: {
        expenseList: [],
    },
    reducers: {
        addExpense: (currentSlice, actions) => {
            currentSlice.expenseList.push(actions.payload)

        }
    }
});

const { addExpense } = expenseSlice.actions;
export { addExpense };