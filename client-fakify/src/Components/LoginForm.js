import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../CSS/LoginForm.css'
const LoginForm = () => {
  return (
    <>
    <h1>Welcome To Fakify</h1>
    <div className='Overall'>
      <form id='Logindata'>
    <span className='loginContainer'>
        <div className='userName'><TextField id="outlined-basic" label="User Name" variant="outlined" /></div>
        <div className='Password'><TextField id="outlined-basic" label="Password" variant="outlined" /></div>
        <div className='login'><Button variant="text" >Login</Button></div>
    </span> 
    </form>
    </div> 
    </>
  )
}

export default LoginForm
