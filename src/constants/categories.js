const incomeColors = ['#123123', '#154731', '#165f40', '#16784f', '#14915f', '#10ac6e', '#0bc77e', '#04e38d', '#00ff9d'];
const expenseColors = ['#b50d12', '#bf2f1f', '#c9452c', '#d3583a', '#dc6a48', '#e57c58', '#ee8d68', '#f79d79', '#ffae8a', '#cc474b', '#f55b5f'];

export const incomeCategories = [
  { type: 'Работа', amount: 0, color: incomeColors[0] },
  { type: '%%', amount: 0, color: incomeColors[1] },
  { type: 'Шабашка', amount: 0, color: incomeColors[2] },
  { type: 'Ценные бумаги', amount: 0, color: incomeColors[3] },
  { type: 'Лотерея', amount: 0, color: incomeColors[4] },
  { type: 'Подарки', amount: 0, color: incomeColors[5] },
  { type: 'Зряплата', amount: 0, color: incomeColors[6] },
  { type: 'Снято с хранения', amount: 0, color: incomeColors[7] },
  { type: 'От сдачи внаём', amount: 0, color: incomeColors[8] },
];

export const expenseCategories = [
  { type: 'Счета', amount: 0, color: expenseColors[0] },
  { type: 'Машина', amount: 0, color: expenseColors[1] },
  { type: 'Одежда', amount: 0, color: expenseColors[2] },
  { type: 'Траснпортные', amount: 0, color: expenseColors[3] },
  { type: 'Еда', amount: 0, color: expenseColors[4] },
  { type: 'Покупки', amount: 0, color: expenseColors[5] },
  { type: 'Коммунальные', amount: 0, color: expenseColors[6] },
  { type: 'Развлечения', amount: 0, color: expenseColors[7] },
  { type: 'Телефон', amount: 0, color: expenseColors[8] },
  { type: 'Собака', amount: 0, color: expenseColors[9] },
  { type: 'Прочее', amount: 0, color: expenseColors[10] },
];

export const resetCategories = () => {
  incomeCategories.forEach((c) => c.amount = 0);
  expenseCategories.forEach((c) => c.amount = 0);
};