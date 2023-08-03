import { useFormik } from 'formik';
import React, { useState } from 'react'
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function About() {


    const validationSchema = Yup.object({
        password: Yup.string().required('Password is required').min(8),
        email: Yup.string().email('Invalid email address').required('Email is required'),
      });
    const formik = useFormik({
        initialValues: {
            email:"" , 
            fullName:"",
            isStudent:"",
            password:"",
        },
        validationSchema,
        onSubmit: values => {
         console.log(values);
            
        },
      });
      const handleRadioButtons = (e) => formik.values.isStudent = e.target.value
      const test = () => {
        if(formik.touched.email && formik.errors.email ) {
            toast.error(formik.errors.email , {autoClose:1000})
         }
        if(formik.touched.password && formik.errors.password ){
            toast.error(formik.errors.password , {autoClose:1000})
        }
    }
    const [newRegister , setState] = useState(true)
  return (
    <div>
            <section id="about">
          <div className="container">
               <div className="row">

                    <div className="col-md-6 col-sm-12">
                         <div className="about-info">
                              <h2>Start your journey to a better life with online practical courses</h2>

                              <figure>
                                   <span><i className="fa fa-users"></i></span>
                                   <figcaption>
                                        <h3>Professional Trainers</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ipsa voluptatibus.</p>
                                   </figcaption>
                              </figure>

                              <figure>
                                   <span><i className="fa fa-certificate"></i></span>
                                   <figcaption>
                                        <h3>International Certifications</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ipsa voluptatibus.</p>
                                   </figcaption>
                              </figure>

                              <figure>
                                   <span><i className="fa fa-bar-chart-o"></i></span>
                                   <figcaption>
                                        <h3>Free for 3 months</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ipsa voluptatibus.</p>
                                   </figcaption>
                              </figure>
                         </div>
                    </div>

                    <div className="col-md-offset-1 col-md-4 col-sm-12">
                         <div className="entry-form">
                              <form onSubmit={formik.handleSubmit}>
                                    {newRegister ? <h2>Signup today</h2> : <h2>Login today</h2> }
                                   
                                    {newRegister ?<input type="file" className='text-center' placeholder='your profile image'/> : ""}

                                    {newRegister ? <><label htmlFor="" className='text-white mt-2'>Teacher :</label> <input type='radio' name='type' className='mt-2' onChange={e => handleRadioButtons(e)} value="teacher" />  <label htmlFor="" className='text-white ml-2 mt-2'>Student :</label> <input type='radio' name='type' onChange={e => handleRadioButtons(e)} className='mt-2' value={"student"} /> </> : <br /> }
                                    {newRegister ? <input type="text" name="fullName" onChange={formik.handleChange} value={formik.values.fullName} className="form-control" placeholder="Full name" /> : "" }
                                    
                                   <input type="email" name="email" className="form-control" onChange={formik.handleChange} value={formik.values.email} placeholder="Your email address" />
                                   
                                   <input type="password" name="password" className="form-control" onChange={formik.handleChange} value={formik.values.password} placeholder="Your password" />

                                   <button className="submit-btn form-control" type='submit' id="form-submit" onClick={test}>Get started</button>

                                      <p className='link' onClick={()=>setState(!newRegister)}>  {newRegister ? "create new account" : "already have account" } </p>

                              </form>
                              <ToastContainer />
                              
                         </div>
                    </div>

               </div>
          </div>
     </section>

    </div>
  )
}

export default About
