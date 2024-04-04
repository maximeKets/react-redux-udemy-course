import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { addExpense, setIncome, incrementcountAction } from "store/expense/expense-slice";
export const loggerMiddleware = createListenerMiddleware();

loggerMiddleware.startListening({
    // predicate: ( action ) =>{            The old way to do it 
    //     return action.type == "expenseSlice/";
    // }, 
    matcher: isAnyOf(addExpense, setIncome),                  //  The best way to do it 
    effect: (action, listerAPI) => {
        listerAPI.dispatch(incrementcountAction())
        console.log(listerAPI.getState());
    }
})