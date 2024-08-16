import React from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import IncomeForm from './components/IncomeForm';
import IncomeList from './components/IncomeList';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <h1 className="text-2xl text-center mt-10">Expense Tracker</h1>
      <div className="flex justify-center space-x-10">
        <div>
          <h2 className="text-xl text-center mt-5">Add Expense</h2>
          <ExpenseForm />
          <ExpenseList />
        </div>
        <div>
          <h2 className="text-xl text-center mt-5">Add Income</h2>
          <IncomeForm />
          <IncomeList />
        </div>
      </div>
      <Dashboard />
    </div>
  );
}

export default App;
