import React from "react";
import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getError } from '../utils';


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

  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';


  const classes = useStyles();
  const [balance, setBalance] = useState(5000);

  useEffect(() => {
    async function fetchBalance() {
      const response = await fetch('https://world-cup-tickets-nodejs-production.up.railway.app/api/users/balance');
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