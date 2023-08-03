// import React from 'react'

// function PopularCourse() {
//   return (
//     <div>
//         <section id="courses">
//           <div className="container">
//                <div className="row">

//                     <div className="col-md-12 col-sm-12">
//                          <div className="section-title">
//                               <h2>Popular Courses <small>Upgrade your skills with newest courses</small></h2>
//                          </div>

//                          <div className=" owl-theme owl-courses">
//                               <div className="col-md-3 col-sm-6">
//                                    <div className="item">
//                                         <div className="courses-thumb">
//                                              <div className="courses-top">
//                                                   <div className="courses-image">
//                                                        <img src="images/courses-image1.jpg" className="img-responsive" alt="" />
//                                                   </div>
//                                                   <div className="courses-date">
//                                                        <span><i className="fa fa-calendar"></i> 12 / 7 / 2018</span>
//                                                        <span><i className="fa fa-clock-o"></i> 7 Hours</span>
//                                                   </div>
//                                              </div>

//                                              <div className="courses-detail">
//                                                   <h3><a href="#">Social Media Management</a></h3>
//                                                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                                              </div>

//                                              <div className="courses-info">
//                                                   <div className="courses-author">
//                                                        <img src="images/author-image1.jpg" className="img-responsive" alt="" />
//                                                        <span>Mark </span>
//                                                   </div>
//                                                   <div className="courses-price">
//                                                        <a href="#"><span>USD 25</span></a>
//                                                   </div>
//                                              </div>
//                                         </div>
//                                    </div>
//                               </div>
                                
//                               <div className="col-md-3 col-sm-6">
//                                    <div className="item">
//                                         <div className="courses-thumb">
//                                              <div className="courses-top">
//                                                   <div className="courses-image">
//                                                        <img src="images/courses-image2.jpg" className="img-responsive" alt="" />
//                                                   </div>
//                                                   <div className="courses-date">
//                                                        <span><i className="fa fa-calendar"></i> 20 / 7 / 2018</span>
//                                                        <span><i className="fa fa-clock-o"></i> 4.5 Hours</span>
//                                                   </div>
//                                              </div>

//                                              <div className="courses-detail">
//                                                   <h3><a href="#">Graphic & Web Design</a></h3>
//                                                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                                              </div>

//                                              <div className="courses-info">
//                                                   <div className="courses-author">
//                                                        <img src="images/author-image2.jpg" className="img-responsive" alt="" />
//                                                        <span>Jessica</span>
//                                                   </div>
//                                                   <div className="courses-price">
//                                                        <a href="#"><span>USD 80</span></a>
//                                                   </div>
//                                              </div>
//                                         </div>
//                                    </div>
//                               </div>

//                               <div className="col-md-3 col-sm-6">
//                                    <div className="item">
//                                         <div className="courses-thumb">
//                                              <div className="courses-top">
//                                                   <div className="courses-image">
//                                                        <img src="images/courses-image3.jpg" className="img-responsive" alt="" />
//                                                   </div>
//                                                   <div className="courses-date">
//                                                        <span><i className="fa fa-calendar"></i> 15 / 8 / 2018</span>
//                                                        <span><i className="fa fa-clock-o"></i> 6 Hours</span>
//                                                   </div>
//                                              </div>

//                                              <div className="courses-detail">
//                                                   <h3><a href="#">Marketing Communication</a></h3>
//                                                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                                              </div>

//                                              <div className="courses-info">
//                                                   <div className="courses-author">
//                                                        <img src="images/author-image3.jpg" className="img-responsive" alt="" />
//                                                        <span>Catherine</span>
//                                                   </div>
//                                                   <div className="courses-price free">
//                                                        <a href="#"><span>Free</span></a>
//                                                   </div>
//                                              </div>
//                                         </div>
//                                    </div>
//                               </div>

//                               <div className="col-md-3 col-sm-6" >
//                                    <div className="item">
//                                         <div className="courses-thumb">
//                                              <div className="courses-top">
//                                                   <div className="courses-image">
//                                                        <img src="images/courses-image4.jpg" className="img-responsive" alt="" />
//                                                   </div>
//                                                   <div className="courses-date">
//                                                        <span><i className="fa fa-calendar"></i> 10 / 8 / 2018</span>
//                                                        <span><i className="fa fa-clock-o"></i> 8 Hours</span>
//                                                   </div>
//                                              </div>

//                                              <div className="courses-detail">
//                                                   <h3><a href="#">Summer Kids & Communcations</a></h3>
//                                                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                                              </div>

//                                              <div className="courses-info">
//                                                   <div className="courses-author">
//                                                        <img src="images/author-image1.jpg" className="img-responsive" alt="" />
//                                                        <span>Mark </span>
//                                                   </div>
//                                                   <div className="courses-price">
//                                                        <a href="#"><span>USD 45</span></a>
//                                                   </div>
//                                              </div>
//                                         </div>
//                                    </div>
//                               </div>

                             

//                          </div>

//                </div>
//           </div>
//           </div>
//         </section>
//     </div>
//   )
// }

// export default PopularCourse


import React, { useEffect, useState } from "react";
//import Box from MUI
import {
  Avatar,
  Box,
  Button,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import img1 from "./img1.jpg";
function PopularCourse() {
  const [allCourses, setAllCourses] = useState([]);

  function getAllCourses() {
    fetch("http://localhost:4000/api/v1/user/showAllCourses")
      .then((response) => response.json())
      .then((data) => {
        setAllCourses(data.courses);
      });
  }

  useEffect(() => {
    getAllCourses();
  }, []);
  console.log(allCourses);
  return (
    <div className="container">
    <Box sx={{ width: "90%", mx: "auto", py: 8 }}>
      <Typography variant="h3" sx={{ textAlign: "center", mb: 4 }}>
        All Courses
      </Typography>

      <Swiper
        spaceBetween={50}
        slidesPerView={4}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {allCourses.map((course) => (
          <SwiperSlide key={course.id}>
            <Box>
              <CardMedia
                component={"img"}
                src={"http://localhost:4000/"+course.courseImage}
                sx={{ width: "100%", height: "50%" }}
              />
              <Box p={3}>
                <Box mb={3}>
                  <Typography fontSize={"2.5rem"}>
                    {course.courseName}
                  </Typography>
                  <Typography fontSize={"1.5rem"}>
                    {course.courseDescription}
                  </Typography>
                </Box>
                <Stack direction="row" justifyContent="space-between">
                  <Stack direction={"row"} alignItems={"center"} spacing={2}>
                    <Avatar
                      sx={{
                        height: "50px",
                        width: "50px",
                      }}
                      src={
                        "http://localhost:4000/"+course.teacherId.profileImage
                      }
                      // src={course.teacherId.profileImage}
                    />
                    <Typography variant="h5" fontWeight={"bold"}>
                      {course.teacherId.fullName.split(" ")[0]}
                    </Typography>
                  </Stack>
                  
                </Stack>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
    </div>
  );
}

export default PopularCourse;
