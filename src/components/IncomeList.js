import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeIncome } from '../redux/incomeSlice';

const IncomeList = () => {
  const income = useSelector((state) => state.income.income);
  const dispatch = useDispatch();

  return (
    <ul className="w-full max-w-sm mx-auto mt-5">
      {income.map((item) => (
        <li
          key={item.id}
          className="flex justify-between p-2 border-b border-gray-200"
        >
          <span>{item.source}</span>
          <span>${item.amount.toFixed(2)}</span>
          <button
            onClick={() => dispatch(removeIncome(item.id))}
            className="text-red-500"
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default IncomeList;
