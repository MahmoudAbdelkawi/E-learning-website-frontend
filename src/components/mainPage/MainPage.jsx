import React from 'react'
import Navbar from '../navbar/Navbar'
import Feature from '../features/Feature'
import Main from '../main/Main'
import About from '../about/About'
import Teachers from '../teachers/Teachers'
import PopularCourse from '../popularCourses/PopularCourse'
import StudentReview from '../studentReview/StudentReview'
import Contact from '../contact/Contact'

function MainPage() {
  return (
    <div>
     
        <Main />
        <Feature />
        <About  />
        <Teachers />
        <PopularCourse />
        <StudentReview />
        <Contact />
    </div>
  )
}

export default MainPage