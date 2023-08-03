import React,{useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { InputLabel, MenuItem, Select } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
  const navigate = useNavigate()
  const [role, setRole] = useState('');

  const handleChange = (event) => {
    console.log(event.target.value);
    
    setRole(event.target.value);
   //add this value in formik 
  formik.setFieldValue("role",event.target.value)
  };
  const formik=useFormik({

    initialValues:{
      fullName:"",
      email:"",
      password:"",
      confirmationPassword:"",
   
    },
    validationSchema:yup.object({
      fullName:yup.string().required("Required"),
      email:yup.string().email("email must be a valid email").required("Required"),
      password:yup.string().required("Required"),
      confirmationPassword:yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
  
    }),
    onSubmit:async(values)=>{
      // console.log(values);
      if (!values.role) {
        toast.error("Role is required");
      }
      else
      {
        try{
          const {data} = await axios.post('/auth/signup' , values);
          console.log(data);
          navigate('/signin')
        }
        catch(err){
          toast.error(err.response.data.message , {autoClose:1000})
        }
      }
    }

  })
  const test = () => {
    if(formik.touched.email && formik.errors.email ) {
        toast.error(formik.errors.email , {autoClose:1000})
     }
    if(formik.touched.password && formik.errors.password ){
        toast.error(formik.errors.password , {autoClose:1000})
    }
    if(formik.touched.confirmationPassword && formik.errors.confirmationPassword ){
        toast.error(formik.errors.confirmationPassword , {autoClose:1000})
    }
    if(formik.touched.fullName && formik.errors.fullName ){
        toast.error(formik.errors.fullName , {autoClose:1000})
    }
}
  return (
    <Box
    sx={{
      marginTop: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
      <LockOutlinedIcon />
    </Avatar>
    <Typography component="h1" variant="h5">
      Sign up
    </Typography>
    <form onSubmit={formik.handleSubmit}>
    <Box sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} >
          <TextField
            autoComplete="given-name"
            name="fullName"
            required
            fullWidth
            id="fullName"
            label="Full Name"
            autoFocus
            onChange={formik.handleChange}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="confirmationPassword"
            label="confirmationPassword"
            type="password"
            id="confirmationPassword"
            autoComplete="new-confirmationPassword"
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid item xs={12}>
        <InputLabel id="demo-simple-select-label">Role</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={role}
          label="Age"
          onChange={handleChange}
          sx={{
            color:"black",
            width:"100%"
          }}
        >
          <MenuItem value={"teacher"}>Teacher</MenuItem>
          <MenuItem value={"student"}>Student</MenuItem>
        
        </Select>
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={test}
      >
        Sign Up
      </Button>
      <ToastContainer />
    </Box>
    </form>
  </Box>

  )
}

export default SignUp