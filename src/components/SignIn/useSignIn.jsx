import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from "axios";
import { api } from "../apis";
import { useNavigate } from "react-router-dom";
function useSignIn() {
  const navigate = useNavigate();
  const auth = async (user) => {
    // const {data} = await axios.post('/auth/login' , user);
    // navigate('/')
    // console.log(data);
    // console.log(user);
    try {
      console.log(user);
      if (user?.email && user?.password) {
        const { data } = await axios.post(api, user);
        localStorage.setItem("token", data.token);
        console.log(data.user.role);
        localStorage.setItem("role", data.user.role);
        console.log("user logged in with token", data.token);
        if (data.user.role === "student") navigate("/profileStudent");
        else if (data.user.role === "teacher") {
          navigate("/profileTeacher");
        }
      } else {
        toast.error("Both User email and user password are Required");
      }
    } catch (err) {
      toast.error(err.response.data.message  , {
        autoClose: 1000,
      });
    }
  };

  return [auth];
}

export default useSignIn;
