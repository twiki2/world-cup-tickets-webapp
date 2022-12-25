import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const Forget=()=>{
 
    const paperStyle={padding :20,height:'35vh',width:350, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Forget password</h2>
                </Grid>
                <TextField label='Email' placeholder='Enter Email' fullWidth required/>
 
 
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>reset password</Button>
 
            </Paper>
        </Grid>
    )
}
 
export default Forget