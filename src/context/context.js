import React, { useReducer, createContext } from 'react';
import contextReducer from './contextReducer';

//создаёт носитель контекста ExpenseTrackerContext, в который вкладывает контекст: процедуры удаления и добавления записи

const inicialState = JSON.parse(localStorage.getItem('transactions')) || [];

export const ExpenseTrackerContext = createContext(inicialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, inicialState)

  const deleteTransaction = (id) => { dispatch({ type: 'DELETE_TRANSACTION', payload: id }) }

  const addTransaction = (transaction) => { dispatch({ type: 'ADD_TRANSACTION', payload: transaction }) }

  const balance = transactions.reduce((acc, currVal) => {
    return (currVal.type === 'Расход' ? acc - currVal.amount : acc + currVal.amount)
  }, 0)

  return (
    <ExpenseTrackerContext.Provider value={{ deleteTransaction, addTransaction, transactions, balance }}>
      {children}
    </ExpenseTrackerContext.Provider >
  )
}
