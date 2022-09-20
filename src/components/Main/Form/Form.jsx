import React, { useState, useContext } from 'react'
import { TextField, Grid, Button, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { ExpenseTrackerContext } from '../../../context/context'
import { v4 as uuidv4 } from 'uuid';

import useStyles from './Styles';
import { incomeCategories, expenseCategories } from '../../../constants/categories';
import formatDate from '../../../utils/fomatDate';

const initialState = {
  amount: '',
  category: '',
  type: 'Income',
  date: formatDate(new Date()),
};

const Form = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState(initialState)
  const { addTransaction } = useContext(ExpenseTrackerContext);

  const createTransaction = () => {
    const transaction = { ...formData, amount: Number(formData.amount), id: uuidv4() }
    addTransaction(transaction);
  };

  const selectedCategories = formData.type === 'Приход' ? incomeCategories : expenseCategories;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        ...
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Вид</InputLabel>
          <Select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
            <MenuItem value="Приход">Приход</MenuItem>
            <MenuItem value="Расход">Расход</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Тип</InputLabel>
          <Select value={formData.category} on onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
            {selectedCategories.map((c) => <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>)}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField type="number" label="Сумма" fullWidth value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} />
      </Grid>
      <Grid item xs={6}>
        <TextField type="date" label="Дата" fullWidth value={formData.date} onChange={(e) => setFormData({ ...formData, date: formatDate(e.target.value) })} />
      </Grid>
      <Button className={classes.button} variant="outlined" color="primary" fullWidth onClick={createTransaction}>Создать</Button>
    </Grid>
  )
}

export default Form