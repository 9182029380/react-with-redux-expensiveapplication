import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  income: []
};

const incomeSlice = createSlice({
  name: 'income',
  initialState,
  reducers: {
    addIncome: (state, action) => {
      state.income.push(action.payload);
    },
    removeIncome: (state, action) => {
      state.income = state.income.filter(income => income.id !== action.payload);
    }
  }
});

export const { addIncome, removeIncome } = incomeSlice.actions;
export default incomeSlice.reducer;
