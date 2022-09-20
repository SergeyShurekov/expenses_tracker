import React, { useContext } from 'react'
import { Card, CardHeader, Typography, Grid, Divider, CardContent } from '@material-ui/core';
import { ExpenseTrackerContext } from '../../context/context';

import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List';

const Main = () => {
  const classes = useStyles();
  const { balance } = useContext(ExpenseTrackerContext);

  return (
    <Card className={classes.root}>
      <CardHeader title="Учёт расходов" subheader="Сделано Шуреков" />
      <CardContent>
        <Typography align='center' variant='h5'>Общий баланс {balance} руб.</Typography>
        <Typography variant='subtitle1' style={{ lineHeight: '1.5em', marginTop: '20px' }}>
        </Typography>
        <Divider />
        <Form />
      </CardContent>
      <CardContent className={classes.cartContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>

        </Grid>
      </CardContent>
    </Card>
  )
}

export default Main