import React from "react";
import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(8),
  },
  balance: {
    marginTop: theme.spacing(2),
  },
}));

const BalancePage = () => {
  const classes = useStyles();
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    async function fetchBalance() {
      const response = await fetch('/api/balance');
      const data = await response.json();
      setBalance(data.balance);
    }
    fetchBalance();
  }, []);

  return (
    <div className={classes.root} >
      <Typography variant="h4">Your Balance is </Typography>
      <Typography variant="h6" className={classes.balance}>
        ${balance.toFixed(2)}
        
      </Typography>
    </div>
  )};

export default BalancePage;