import React, { useState } from "react";
import CourseCard from "./CourseCard";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import CourseModal from "./CourseModal";
import { Link } from "react-router-dom";

function TeacherCourses({ data , role }) {
  const [open, setOpen] = useState(false);
  
  return (
    <Box
      className="container row"
      sx={{
        pt: 5,
        pb: 10,
      }}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{
          mb: 3,
        }}
      >
        <Typography variant="h2">Courses</Typography>
        <Typography variant="h4">You have {data.length} courses</Typography>
        {role === "student" ? <Link className="text-primary" to={"/searchOnCourse"}>Add To Your Courses</Link> :<IconButton onClick={() => setOpen(true)}>
          <i
            className="fa fa-plus"
            style={{
              color: "green",
              fontSize: "2rem",
            }}
          ></i>
        </IconButton>}
      </Stack>
      <CourseModal data={null} open={open} setOpen={setOpen} />
      {data.map((course, index) => {
        return <CourseCard key={index} data={course} role={role} index={index} />;
      })}
    </Box>
  );
}

export default TeacherCourses;
