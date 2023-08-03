import React, { useEffect, useRef, useState } from 'react'
import "./SearchCourse.css";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function SearchCourse() {
    const [courses, setCourses] = useState([]); 

    useEffect(() => {
        console.log(courses);
      }, [courses]); 

    const ref = useRef(null);
    const sendValue = async() => {
        console.log(ref.current.value);
        const {data} = await axios.get(`http://localhost:4000/api/v1/user/searchCourse/${ref.current.value}` );
        console.log(data);
        if(data.course.length > 0) {
            let arr = data.course;
            setCourses([...arr]);
            console.log(courses);
        }
    }
    const enroll = async(e) => {
        console.log(e.target.id);
        axios.get(`http://localhost:4000/api/v1/user/enroll/${e.target.id}` ).then((res) => {
            console.log(res);
        }
        ).catch((err) => {

            toast.error(err.response.data.message , {
                autoClose: 1000,
                position: "top-center",
            })
        })
        
    }
  return (
    <div>
        <div className="wrapCourse">
            <div className="searchCourse">
                <input type="text" className="searchTermCourse" placeholder="What are you looking for?" height="105px" ref={ref}/>
                <button type="submit" className="searchButtonCourse" onClick={sendValue}>
                    <i className="fa fa-search"></i>
                </button>
            </div>

            {
                
                courses.length > 0 ?
                    courses.map((course) => 
                    (<div className="cardCourse">
                        <img src={`http://localhost:4000/${course.courseImage}`} alt="Avatar" style={{width:"100%"}} />
                        <div className="containerCourse">
                            <h4><b>{course.courseName}</b></h4> 
                            <p>{course.courseDescription}</p> 
                            <button id={`${course._id}`} onClick={(e)=>enroll(e)} className='enrollButtonCourse'>enroll</button>
                        </div>
                    </div>)) : ""
            }

            <ToastContainer />

        </div>
    </div>
  )
}

export default SearchCourse
