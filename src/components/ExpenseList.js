import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeExpense } from '../redux/expensesSlice';

const ExpenseList = () => {
  const expenses = useSelector((state) => state.expenses.expenses);
  const dispatch = useDispatch();

  return (
    <ul className="w-full max-w-sm mx-auto mt-5">
      {expenses.map((expense) => (
        <li
          key={expense.id}
          className="flex justify-between p-2 border-b border-gray-200"
        >
          <span>{expense.name}</span>
          <span>${expense.amount.toFixed(2)}</span>
          <button
            onClick={() => dispatch(removeExpense(expense.id))}
            className="text-red-500"
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
