import React from 'react'
import Axios from 'axios';
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useLocation, useNavigate } from 'react-router-dom';
import {  useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getError } from '../utils';

const INITIAL_STATE = {
    email: "",
    password: "",
    error: null,
  };


export  default function  Login () { 
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { userInfo } = React.useState(INITIAL_STATE);

  const submitHandler = async (e) => {

    e.preventDefault();

    try { 
      const { data } = await Axios.post('http://localhost:5000/api/users/signin', {
        email,
        password,
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
    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return(
        <Grid >
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid >
                
                <TextField label='Username' placeholder='Enter username' fullWidth  name='email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth  name='password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth onClick={submitHandler} >Sign in</Button>
                <Typography >
                     <Link href="/forget-password" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="Signup" >
                        Sign Up 
                </Link>
                </Typography>
               
            </Paper>

        </Grid>
              
    );
}

