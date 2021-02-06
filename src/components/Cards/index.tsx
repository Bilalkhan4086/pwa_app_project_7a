import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import './index.css';
import { GlobalContext } from '../../context/GobalContext';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(2),
      height: theme.spacing(16),
    },
  },
}));

export default function Cards() {
  const classes = useStyles();

  const { transactions } = useContext(GlobalContext);
  //creating list of all the transaction's amounts and seprating positive and negitive amounts   
  const ammm: number[] = transactions.map((i) => i.am);
  // pam = positive amount and nam = negitive amount
  const pam: number = ammm.filter(i => i > 0).reduce((acc, i) => (acc += i * 1), 0);
  const nam: number = ammm.filter(i => i < 0).reduce((acc, i) => (acc += i * 1), 0);




  return (
    <div className="Cards">
      <div className={classes.root}>
        <Paper
          variant="outlined"
          className="Income"
        >
          <br />
                  INCOME
              <br />
          <span
            style={{ fontSize: "30px", color: "rgb(11, 151, 11)" }}
          >
            ${pam}
          </span>
        </Paper>
        <Paper
          variant="outlined"
          className="Expenses"
        >
          <br />
              EXPENSES
            <br />
          <span
            style={{ fontSize: "30px", color: "rgb(218, 46, 33" }}
          >
            ${nam}
          </span>
        </Paper>
      </div>
    </div>
  );
}
