import React from "react";
import "./ProfileStudent.css";
import useGetCourses from "../hooks/courses/useGetCourses";
import LoadingPage from "../ui/LoadingPage";
import TeacherCourses from "../courses/TeacherCourses";
import Profile from "../profile/Profile";
function ProfileStudent() {
  const { data, isSuccess, loading, error } = useGetCourses({url:"/user/myCourses"});
  localStorage.setItem("role", "student");
  const [role , setRole] = React.useState(localStorage.getItem("role"));
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
          {isSuccess && <TeacherCourses data={data} role={role} />}
        </div>
      </div>
    </div>
  );
}

export default ProfileStudent;
