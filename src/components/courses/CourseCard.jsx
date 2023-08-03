import React, { useState } from "react";
import useCoursesMutation from "../hooks/courses/useCoursesMutation";
import { Box, IconButton } from "@mui/material";
import CourseModal from "./CourseModal";

function CourseCard({ data , role }) {
  const { deleteCourseHandler, isSuccess, loading } = useCoursesMutation();
  console.log(role);
  const [open, setOpen] = useState(false);
  return (
    <div className="col-md-4 col-sm-6 mt-5 relative">
      <CourseModal data={data} role={role} open={open} setOpen={setOpen} />
      {loading && isSuccess && (
        <Box
          sx={{
            position: "absolute",

            inset: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 1,
          }}
        />
      )}
      <div className="box1">
        <img src={`http://localhost:4000/${data?.courseImage}`} alt="" />
        <h3 className="title">{data?.courseName}</h3>
        <ul className="icon">
          <li>
            <IconButton
              onClick={() => setOpen(true)}
              variant="contained"
              color="white"
            >
              <i
                className="fa fa-edit"
                style={{
                  color: "white",
                }}
              ></i>
            </IconButton>
          </li>
          {role !=="student" ? <li>
            <IconButton
              onClick={() => deleteCourseHandler({ id: data._id })}
              variant="contained"
              color="white"
            >
              <i
                className="fa fa-remove"
                style={{
                  color: "white",
                }}
              ></i>
            </IconButton>
          </li> : ""}
        </ul>
      </div>
    </div>
  );
}

export default CourseCard;
