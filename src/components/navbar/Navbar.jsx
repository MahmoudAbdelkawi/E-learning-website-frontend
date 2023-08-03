import { Box } from '@mui/material'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
    const {pathname} = useLocation();
    const [token , setToken] = React.useState(localStorage.getItem('token'))
    const [role , setRole] = React.useState(localStorage.getItem('role'))
  return (
    <Box 
    
    sx={{

     display:pathname==="/signin"||
             pathname==="/signup"?"none":"block"
    }}
    
    >
     {/* <section className="preloader">
          <div className="spinner">

               <span className="spinner-rotate"></span>
               
          </div>
     </section> */}


     <section className="navbar custom-navbar navbar-fixed-top" role="navigation">
          <div className="container">

               <div className="navbar-header">
                    <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                         <span className="icon icon-bar"></span>
                         <span className="icon icon-bar"></span>
                         <span className="icon icon-bar"></span>
                    </button>

                    {/* <a href="#" className="navbar-brand">Known</a> */}
               </div>

               <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav navbar-nav-first">
                         <li><Link to="/" className="smoothScroll">Home</Link></li>
                         <li><Link to="/about" className="smoothScroll">About</Link></li>
                         <li><Link to="/team" className="smoothScroll">Our Teachers</Link></li>
                         <li><Link to="/courses" className="smoothScroll">Courses</Link></li>
                         <li><Link to="/reviews" className="smoothScroll">Reviews</Link></li>
                         <li><Link to="/contact" className="smoothScroll">Contact</Link></li>
                         {token ? "" :<li><Link to="/signin" className="smoothScroll">Sign In</Link></li>}
                         {token ? "" :<li><Link to="/signup" className="smoothScroll">Sign Up</Link></li>}
                         {token && role==="student" ? <li><Link to="/profileStudent" className="smoothScroll">Profile</Link></li> : ""}
                         {token && role==="teacher" ? <li><Link to="/profileTeacher" className="smoothScroll">Profile</Link></li> : ""}
                    </ul>

                    <ul className="nav navbar-nav navbar-right">
                         <li><a href="#"><i className="fa fa-phone"></i> +65 2244 1100</a></li>
                    </ul>
               </div>

          </div>
     </section>
    </Box>
  )
}

export default Navbar
