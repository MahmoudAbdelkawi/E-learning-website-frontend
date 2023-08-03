import {
  Avatar,
  Box,
  Button,
  Container,
  Dialog,
  IconButton,
  Modal,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useRef } from "react";
import * as yup from "yup";
import { baseUrl } from "../apis";
import useCoursesMutation from "../hooks/courses/useCoursesMutation";

function CourseModal({ open, setOpen, data , role }) {
  const { addCourseHandler, updateCourseHandler, isSuccess, loading, error } =
    useCoursesMutation();
  const formik = useFormik({
    initialValues: {
      courseName: data?.courseName || "",
      description: data?.courseDescription || "",
      image: data?.courseImage || "", // string or file object
      sections: data?.sections || [],
    },
    validationSchema: yup.object({
      courseName: yup.string().required("Required"),
      description: yup.string().required("Required"),
      image: yup.string().optional(),
      sections: yup.array().required("Required"),
    }),
    onSubmit: (values) => {
      if (data) {
        updateCourseHandler({
          course: {
            courseName: values.courseName,
            courseDescription: values.description,
            sections: values.sections,
          },
          id: data._id,
        });
      } else {
        const formData = new FormData();
        formData.append("courseName", values.courseName);
        formData.append("description", values.description);
        values.sections.forEach((section, index) =>
          formData.append(`sections[${index}]`, section)
        );
        formData.append("image", values.image);
        addCourseHandler({ course: formData });
      }
      // window.location.reload();
    },
  });
  const imageRef = useRef(null);
  const addSectionHandler = () => {
    formik.setFieldValue("sections", [...formik.values.sections, ""]);
  };
  const deleteSectionHandler = (index) => {
    formik.setFieldValue(
      "sections",
      formik.values.sections.filter((_, i) => i !== index)
    );
  };
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      scroll={"paper"}
      fullWidth
      maxWidth="lg"
    >
      <Container
        sx={{
          p: 3,
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 2,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              textTransform: "capitalize",
              textAlign: "center",
              mb: 5,
            }}
          >
            {role === "student" ? "My Courses" : data ? "update course" : "add course"}
            {/* {
              if (role === "user") {
                "My Courses"
              }
              else {
                {data ? "update course" : "add course"}
              }
            } */}
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              label="Course Name"
              variant="outlined"
              name="courseName"
              value={formik.values.courseName}
              onChange={formik.handleChange}
              error={
                formik.touched.courseName && Boolean(formik.errors.courseName)
              }
              helperText={formik.touched.courseName && formik.errors.courseName}
              onBlur={formik.handleBlur}
              sx={{
                mb: 3,
                fontSize: "2rem !important",
                fontWeight: "bold",
              }}
            />
            <TextField
              fullWidth
              label="Description"
              variant="outlined"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
              onBlur={formik.handleBlur}
              sx={{
                mb: 3,
                fontSize: "2rem !important",
                fontWeight: "bold",
              }}
            />
            {!data ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mb: 3,
                }}
              >
                <input
                  type="file"
                  style={{
                    display: "none",
                  }}
                  name="image"
                  onBlur={formik.handleBlur}
                  onChange={(e) => {
                    formik.setFieldValue("image", e.target.files[0]);
                  }}
                  ref={imageRef}
                />
                <IconButton onClick={() => imageRef.current.click()}>
                  <Avatar
                    sx={{
                      width: 200,
                      height: 200,
                    }}
                    src={
                      formik.values.image instanceof File
                        ? `${URL.createObjectURL(formik.values.image)}`
                        : baseUrl + formik.values.image
                    }
                  />
                </IconButton>
              </Box>
            ) : (
              ""
            )}
            <Stack
              direction="row"
              spacing={2}
              sx={{ mb: 3 }}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography
                variant="h4"
                sx={{
                  textTransform: "capitalize",
                  textAlign: "center",
                  mb: 5,
                }}
              >
                Sections
              </Typography>

              {role === "student" ? "" :<IconButton onClick={addSectionHandler}>
                <i
                  className="fa fa-plus"
                  style={{
                    color: "green",
                  }}
                ></i>
              </IconButton>}
            </Stack>
            {formik.values.sections.map((section, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 2,
                    mb: 3,
                  }}
                >
                  <TextField
                    fullWidth
                    label="Section"
                    variant="outlined"
                    name="section"
                    // {role === "user" ? "disabled" : ""}
                    value={section}
                    onChange={(e) => {
                      formik.setFieldValue(
                        "sections",
                        formik.values.sections.map((s, i) => {
                          if (i === index) {
                            return e.target.value;
                          }
                          return s;
                        })
                      );
                    }}
                    error={
                      formik.touched.section && Boolean(formik.errors.sections)
                    }
                    helperText={
                      formik.touched.section && formik.errors.sections
                    }
                    onBlur={formik.handleBlur}
                    sx={{
                      fontSize: "2rem !important",
                      fontWeight: "bold",
                    }}
                  />
                  {role==="teacher" ? <IconButton onClick={() => deleteSectionHandler(index)}>
                    <i
                      className="fa fa-remove"
                      style={{
                        color: "red",
                      }}
                    ></i>
                  </IconButton>:""}
                </Box>
              );
            })}
            <Box
              sx={{ display: "flex", justifyContent: "center", mt: 2 }}
              alignItems="center"
            >
              {role === "student" ? "" : <Button
                disabled={loading}
                type="submit"
                sx={{
                  fontSize: "1.5rem !important",
                  fontWeight: "bold",
                }}
                variant="contained"
              >
                {data ? "update" : "add"}
              </Button>}
            </Box>
          </form>
        </Paper>
      </Container>
    </Dialog>
  );
}

export default CourseModal;
