import axios from "axios";
import { useState } from "react";

function useCoursesMutation() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const updateCourseHandler = ({ course, id }) => {
    setLoading(true);
    setError(false);
    setIsSuccess(false);
    axios
      .put(`/teacher/updateCourse/${id}`, course)
      .then((res) => {
        setIsSuccess(true);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const deleteCourseHandler = ({ id }) => {
    setLoading(true);
    setError(false);
    setIsSuccess(false);
    axios
      .delete(`/teacher/deleteCourse/${id}`)
      .then((res) => {
        setIsSuccess(true);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const addCourseHandler = ({ course }) => {
    setLoading(true);
    setError(false);
    setIsSuccess(false);
    axios
      .post("/teacher/addCourse", course)
      .then((res) => {
        setIsSuccess(true);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return {
    updateCourseHandler,
    deleteCourseHandler,
    addCourseHandler,
    isSuccess,
    loading,
    error,
  };
}

export default useCoursesMutation;
