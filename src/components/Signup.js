import React from 'react'
import Axios from 'axios';
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useLocation, useNavigate } from 'react-router-dom';
import {  useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getError } from '../utils';
const INITIAL_STATE = {
    name:"",
    email: "",
    password: "",
    error: null,
  };

const Signup = () => {
    
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';
  

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const { userInfo } = React.useState(INITIAL_STATE);

  const submitHandler = async (e) => { 

    e.preventDefault();

    if (password !== confirmPassword) {

        toast.error('Passwords does not match');
      return;
    } 
    try {
      const { data } = await Axios.post('https://world-cup-tickets-nodejs-production.up.railway.app/api/users/signup', {  
        name,
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

  console.log("HERE#12")
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form onSubmit={submitHandler}>
                    <TextField fullWidth label='Name' placeholder="Enter your name" type='text'  name='name' value={name}   onChange={(e) => setName(e.target.value)} required />
                    <TextField fullWidth label='Email' placeholder="Enter your email" type='email' name='email' value={email}  onChange={(e) => setEmail(e.target.value)} required />
                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                    {/* <TextField fullWidth label='Phone Number' placeholder="Enter your phone number" /> */}
                    <TextField fullWidth label='Password' placeholder="Enter your password" type='password' name='password' value={password}  onChange={(e) => setPassword(e.target.value)} required/>
                    <TextField fullWidth label='Confirm Password' placeholder="Confirm your password" type='password' name='confirmPassword' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                    <Button type='submit' variant='contained' color='primary'  >Sign up</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Signup;