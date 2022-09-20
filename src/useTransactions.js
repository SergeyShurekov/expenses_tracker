import { useContext } from "react";
import { ExpenseTrackerContext } from "./context/context";

import { incomeCategories, expenseCategories, resetCategories } from "./constants/categories";

const useTransactions = (title) => {
  resetCategories();
  const { transactions } = useContext(ExpenseTrackerContext);
  const transPerType = transactions.filter((t) => t.type === title);
  const total = transPerType.reduce((acc, currVal) => acc += currVal.amount, 0);
  const categories = title === 'Приход' ? incomeCategories : expenseCategories;

  console.log({ transPerType, total, categories });

  transPerType.forEach((t) => {
    const category = categories.find((c) => c.type === t.category);
    if (category) category.amount += t.amount;
  });

  const filteredCategories = categories.filter((sc) => sc.amount > 0);

  const chartData = {
    datasets: [{
      data: filteredCategories.map((c) => c.amount),
      backgroundColor: filteredCategories.map((c) => c.color),
    }],
    labels: filteredCategories.map((c) => c.type)
  }

  return { filteredCategories, total, chartData }
};

export default useTransactions