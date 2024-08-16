export const getMonthlyData = (income, expenses) => {
    const monthlyIncome = {};
    const monthlyExpenses = {};
  
    const addData = (data, container) => {
      data.forEach((item) => {
        const month = new Date(item.date).toLocaleString('default', { month: 'long' });
        if (container[month]) {
          container[month] += item.amount;
        } else {
          container[month] = item.amount;
        }
      });
    };
  
    addData(income, monthlyIncome);
    addData(expenses, monthlyExpenses);
  
    return { monthlyIncome, monthlyExpenses };
  };
  