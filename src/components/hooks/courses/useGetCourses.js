import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function useGetCourses({url}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  useEffect(() => {
    const fetchData = () => {
      if(url.includes("user")) {
        axios
        .post(url)
        .then((res) => {
          setData(res.data.courses);
          setIsSuccess(true);
        })
        .catch((err) => {
          console.log(err);
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        });
      }else{
      axios
        .get(url)
        .then((res) => {
          setData(res.data.courses);
          setIsSuccess(true);
        })
        .catch((err) => {
          console.log(err);
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        });
      }
    };
    fetchData();
  }, []);
  // console.log(data);
  return {
    data,
    isSuccess,
    loading,
    error,
  };
}

export default useGetCourses;
