import React from 'react';
import profileImage from "../srikanth1234.jpg";
import "./home.css"
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div>
<section id="home" className="min-vh-100 d-flex align-items-center bg-light">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6" id='p9'>
        <h1 className="display-4 fw-bold mb-4">
          Hi, I'm Minde Srikanth
        </h1>
        <p className="lead mb-4">
          Full-Stack Developer skilled in the MERN stack, creating responsive front-end designs and robust back-end solutions using React.js, Node.js, and MongoDB.
        </p>
        <div className="d-flex gap-3">
          <a href="#contact" className="btn btn-light px-4 bi bi-telephone-outbound-fill fs-4">
            Contact Me
          </a>
        </div> 
      </div>

      {/* Profile image */}
      <div className="col-lg-6  text-center">
        <img
          id="d10"
          src={profileImage}
          alt="Profile"
          className="img-fluid shadow"
        />
      </div>
    </div>
  </div>
</section>


      {/* Skills Section */}
      <section id="skills" className="py-2">
        <div id='d1' className="container ">
          <h2 className="text-center mb-5" >My Skills</h2>
          <div className="row g-4" >
            {/* Languages */}
            <div className="col-md-4 " >
              <div className="card h-100 border-0 shadow-sm ">
                <div className="card-body  " >
                  <center><h4 >Languages</h4></center>
                  <ul className="list-unstyled d-flex flex-wrap  justify-content-center">
                    <li  className="mb-1"><span className="badge  text-light me-2 fs-6"id='skillshover'>HTML</span></li>
                    <li  className="mb-1"><span className="badge text-light me-2 fs-6"id='skillshover'>CSS</span></li>
                    <li  className="mb-1"><span className="badge text-light me-2 fs-6"id='skillshover'>JavaScript</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Libraries */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <center><h4>Libraries</h4></center>
                  <ul className="list-unstyled d-flex flex-wrap justify-content-center">
                    <li className="mb-1"><span className="badge text-light me-2 fs-6">React.JS</span></li>
                    <li className="mb-1"><span className="badge text-light me-2 fs-6">Formik</span></li>
                    <li className="mb-1"><span className="badge text-light me-2 fs-6">Redux Toolkit</span></li>
                    <li className="mb-1"><span className="badge text-light me-2 fs-6">Socket.io</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Frameworks */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-2">
                <center><h4>Framework</h4></center>
                <ul className="list-unstyled d-flex flex-wrap justify-content-center">
                  <li className="mb-1"><span className="badge text-light me-2 fs-6">Bootstrap</span></li>
                  {/* <li className="mb-1"><span className="badge text-dark me-2 fs-6">Node.js</span></li>
                  <li className="mb-1"><span className="badge text-dark me-2 fs-6">Express.js</span></li>
                  <li className="mb-1"><span className="badge text-dark me-2 fs-6">Pug</span></li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section><br /> 
      <section id="skills" className="py-2 ">
        <div className="container">
          <h2 className="text-center mb-5">Backend Technologies </h2>
          <div className="row g-4">
            {/* Languages */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <center><h4>Database</h4></center>
                  <ul className="list-unstyled d-flex flex-wrap justify-content-center">
                    <li className="mb-1"><span className="badge text-light me-2 fs-6">JSON Server</span></li>
                    <li className="mb-1"><span className="badge text-light me-2 fs-6">MongoDB</span></li>
                  
                  </ul>
                </div>
              </div>
            </div>

            {/* Libraries */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <center><h4>Libraries</h4></center>
                  <ul className="list-unstyled d-flex flex-wrap justify-content-center">
                    <li className="mb-1"><span className="badge text-light me-2 fs-6">JSON Web Token Management</span></li>
                    <li className="mb-1"><span className="badge text-light me-2 fs-6">Session management</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Frameworks */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-2">
                <center><h4>Framework</h4></center>
                <ul className="list-unstyled d-flex flex-wrap justify-content-center">
                  <li className="mb-1"><span className="badge text-light me-2 fs-6">Node.js</span></li>
                  <li className="mb-1"><span className="badge text-light me-2 fs-6">Express.js</span></li>
                  <li className="mb-1"><span className="badge text-light me-2 fs-6">Pug</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Qualification Section */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Qualification</h2>
        <div className="qualification-container">
          <div className="qualification-item">
            <div className="circle"></div>
            <div className="content">
              <h5>Bachelor Degree</h5>
              <p>BMR Degree Gajwel 2019 - 2022</p>
            </div>
          </div>
          <div className="qualification-item">
            <div className="circle"></div>
            <div className="content">
              <h5>Diploma</h5>
              <p>GMR Polytechnic Gajwel 2016 - 2019</p>
            </div>
          </div>
          <div className="qualification-item">
            <div className="circle"></div>
            <div className="content">
              <h5>Secondary School Certificate</h5>
              <p>Z,P, High School, 2015 - 2016</p>
            </div>
          </div>
       
        </div>
        
      </div>
      

      {/* Projects Section */}
      <section id="projects" className="py-6 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">My Projects</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <img style={{height:"250px"}}src="https://tse3.mm.bing.net/th?id=OIP.ygLp5Zf63FkXUwKb_B7FwgHaD5&pid=Api&P=0&h=180" alt="E-commerce Website" className="card-img-top project-img" />
                <div className="card-body">
                  <h5 className="card-title">Construction Mart Web App</h5>
                  <p className="card-text text-muted">Designed and developed a web application for a construction materials marketplace, allowing customers to browse and purchase materials from multiple suppliers. The platform features an intuitive user interface with seamless navigation and dynamic interactions.</p>
                  <div className=' d-flex justify-content-between'>
                  <button className='btn btn-outline-warning justify-content-start'><Link  to="https://github.com/srikanthminde/Constructions-Mart-UI" className='text-decoration-none nav-link active'>Git-hub</Link></button> 
                  <button className='btn btn-outline-success justify-content-end'><Link to="https://construction-mart-ui-sr-1pmm.vercel.app/" className='text-decoration-none nav-link active'>Live Demo</Link></button>
                  </div>   
                </div>
              </div>
            </div>
            <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
                <img style={{height:"250px"}} src="https://img.freepik.com/premium-photo/online-loan-application-form-modish-digital-information-collection_31965-49609.jpg" alt="E-commerce Website" className="card-img-top project-img" />
                <div className="card-body">
                  <h5 className="card-title">Loan Application Web Platform</h5>
                  <p className="card-text text-muted">Engineered a robust web platform to streamline the loan application process for customers seeking financing for new vehi-cles, houses, or mobile phones. The platform enables agents to gather customer information, complete application forms, and submit them to managers for approval and fund disbursement.</p>
                  <div className='d-flex justify-content-between'>
                    <button className='btn btn-outline-warning'><Link to="https://github.com/srikanthminde/Loan-Application-Frontend" className='text-decoration-none nav-link active"'>Git-hub</Link></button> 
                    <button className='btn btn-outline-success'><Link to="https://incandescent-phoenix-0de2a1.netlify.app/login" className='text-decoration-none nav-link active'>Live Demo</Link></button>
                  </div>
                </div>
              </div>
            </div>  
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-4">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-6 text-center">
        <h2 className="mb-4">Get In Touch</h2>
        <p className="text-muted mb-5">Available for freelance projects and full-time opportunities.</p>
        <div className="row g-3">
          <div className="col-md-6">
            <div className="card p-1 d-flex align-items-center">
              <i className="fs-2 bi bi-whatsapp text-success"></i> 
              <h5 className="mt-2">WhatsApp number</h5>
              <p className="text-muted">+91 9705377176</p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card p-3 d-flex align-items-center">
              <a href="https://www.linkedin.com/in/srikanthminde/" className="icon-link">
                <i className="fs-2 bi bi-linkedin text-primary"></i>
              </a>
              <h5 className="mt-2">LinkedIn</h5>
              <p className="text-muted">srikanth minde</p>
            </div> 
          </div>  
          <div className="col-md-6">
            <div className="card p-3 d-flex align-items-center">
              <a href=" mailto:srikanth9705377176@gmail.com" className="icon-link">
                <i className="fs-2 bi bi-envelope text-warning text-primary"></i>
              </a>
              <h5 className="mt-2">Mail</h5>
              <p className="text-muted">srikanth minde</p>
            </div>
          </div>  

          <div className="col-md-6">
            <div className="card p-3 d-flex align-items-center">
              <a href="https://github.com/srikanthminde " className="icon-link">
                <i className="bi fs-2  bi-github text-dark"></i>
              </a>
              <h5 className="mt-2">LinkedIn</h5>
              <p className="text-muted">srikanth minde</p>
            </div>
          </div>  
          
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}

export default Home;
