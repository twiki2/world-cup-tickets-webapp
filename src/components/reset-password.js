import React from 'react'
import Axios from 'axios';
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useLocation, useNavigate } from 'react-router-dom';
import {  useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getError } from '../utils';

const INITIAL_STATE = {
    password: "",
    confirmPassword:""
  };

  const Reset = ()=>{
    const navigate = useNavigate();
    const { search } = useLocation();
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl ? redirectInUrl : '/';
  
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const { userInfo } = React.useState(INITIAL_STATE);
  
    const submitHandler = async (e) => {
  
      e.preventDefault();
  
      try { 
        const { data } = await Axios.post('https://world-cup-tickets-nodejs-production.up.railway.app/api/users/change-password', {
          password,
          confirmPassword,
        
        });
        navigate(redirect || '/');
      } catch (err) {

        toast.error(getError(err));
      }
    };
    useEffect(() => { 
      if (userInfo) { 
        navigate(redirect); 
      }
    }, [navigate, redirect, userInfo]);
   
    const paperStyle={padding :20,height:'35vh',width:350, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}

    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Reset password</h2>
                </Grid>
                <TextField label='Password' placeholder='Enter new password' fullWidth required  onChange={(e) => setPassword(e.target.value)}/>
                <TextField label='confirmPassword' placeholder='Confirm new password' fullWidth required  onChange={(e) => setConfirmPassword(e.target.value)}/>
 
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth onClick={submitHandler} >reset password</Button>
 
            </Paper>
        </Grid>
    )
}
export default Reset