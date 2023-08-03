import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import LoadingPage from "../ui/LoadingPage";

const ProtectedRoute = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getUser = () => {
      axios
        .post("/auth/me")
        .then((res) => {
          setIsLogged(true);
          console.log("user is logged in");
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    getUser();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return <>{isLogged ? <Outlet /> : <Navigate to="/signin" />}</>;
};

export default ProtectedRoute;
