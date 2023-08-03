import React from "react";
import "./ProfileTeacher.css";
import useGetCourses from "../hooks/courses/useGetCourses";
import LoadingPage from "../ui/LoadingPage";
import TeacherCourses from "../courses/TeacherCourses";
import Profile from "../profile/Profile";
function ProfileTeacher() {
  const { data, isSuccess, loading, error } = useGetCourses({url : "/teacher/getCourses"});

  if (loading) {
    return <LoadingPage />;
  }

  if (error) {
    return <div>error</div>;
  }

  return (
    <div>
      <div className="container">
        <Profile />
        <div className="row mt-40">
          {isSuccess && <TeacherCourses data={data}  />}
        </div>
      </div>
    </div>
  );
}

export default ProfileTeacher;
