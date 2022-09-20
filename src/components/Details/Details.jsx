import React from 'react';

import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

import useStyles from './styles';
import useTransactions from '../../useTransactions';

const Details = ({ title }) => {
  const classes = useStyles();
  const { total, chartData } = useTransactions(title)

  return (
    <Card className={title === 'Приход' ? classes.income : classes.expense}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">{total} руб.</Typography>
        <Doughnut data={chartData} />
      </CardContent>
    </Card >
  )
}

export default Details
