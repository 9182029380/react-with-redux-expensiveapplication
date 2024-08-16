import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addIncome } from '../redux/incomeSlice';
import { v4 as uuidv4 } from 'uuid';

const IncomeForm = () => {
  const [source, setSource] = useState('');
  const [amount, setAmount] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addIncome({ id: uuidv4(), source, amount: parseFloat(amount), date: new Date() }));
    setSource('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto mt-5">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Income Source"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <button type="submit" className="w-full p-2 bg-green-500 text-white rounded">
        Add Income
      </button>
    </form>
  );
};

export default IncomeForm;
