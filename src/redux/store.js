import { configureStore } from '@reduxjs/toolkit';
import expensesReducer from './expensesSlice';
import incomeReducer from './incomeSlice';

export const store = configureStore({
  reducer: {
    expenses: expensesReducer,
    income: incomeReducer
  }
});
