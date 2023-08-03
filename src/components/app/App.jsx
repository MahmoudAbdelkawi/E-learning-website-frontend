import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";
import React, { useState } from "react";
import MainPage from "../mainPage/MainPage";
import Navbar from "../navbar/Navbar";
import Profile from "../profile/Profile";
import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";
import ProtectedRoute from "./ProtectedRoute";
import ProfileTeacher from "../profileTeacher/ProfileTeacher";
import axios from "axios";
import { useEffect } from "react";
import Layout from "../Layout/Layout";
import ProfileStudent from "../profileStudent/ProfileStudent";
import SearchCourse from "../searchCourse/SearchCourse";
import ForgetPassword from "../forgetPassword/ForgetPassword";
import ConfirmationCode from "../forgetPassword/ConfirmationCode";
import UpdatePassword from "../forgetPassword/UpdatePassword";

axios.defaults.baseURL = "http://localhost:4000/api/v1";
axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "token"
)}`;

function App() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/confirmationCode" element={<ConfirmationCode />} />
          <Route path="/updatePassword" element={<UpdatePassword />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/profileTeacher" element={<ProfileTeacher />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/profileStudent" element={<ProfileStudent />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/searchOnCourse" element={<SearchCourse />} />
          </Route>
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
