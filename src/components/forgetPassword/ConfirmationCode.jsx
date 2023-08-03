import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ConfirmationCode() {
    const navigate = useNavigate();
    const formik = useFormik({
      initialValues: {
        email: "",
        code : 0,
      },
      validationSchema: yup.object({
        email: yup
          .string()
          .email("email must be a valid email")
          .required("Required"),
          code: yup
          .number()
          .required("Required"),
      }),
      onSubmit: async(values) => {
        console.log(values);
        axios.post('http://localhost:4000/api/v1/auth/confirmationCode' , values).then((res)=>{
            console.log(res);
            navigate('/updatePassword')
            }
        ).catch((err)=>{
           toast.error(err.response.data.message);
        })
      },
    });
    return (
        <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Box sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={formik.handleChange}
          />
           <TextField
            margin="normal"
            // required
            fullWidth
            name="code"
            label="code"
            type="code"
            id="code"
            autoComplete="current-code"
            onChange={formik.handleChange}
          />{/*
          <FormControlLabel
            control={<Link value="remember" style={{marginLeft:"15px"}} color="primary" to={"/forgetPassword"} >forget password</Link>}
            label=""
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            reset password
          </Button>
          {/* <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid> */}
          <ToastContainer />
        </Box>
      </form>
    </Box>
    )
}

export default ConfirmationCode
