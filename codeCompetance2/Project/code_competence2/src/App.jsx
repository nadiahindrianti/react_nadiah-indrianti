import Logo from './assets/logo.jpg'
import Landing from './assets/Home.png'
import About from './assets/About.jpg'
import React, {useState} from 'react';
import Modal from "react-modal";

Modal.setAppElement("#root");

function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [help, setHelp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Firstname: ${firstName}, LastName: ${lastName}, Email: ${email}, What can we help you with?: ${help}`);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary h5">
        <div className="container-fluid">
          <img src={Logo} width="60" height="45" alt="" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div>
            <ul className="navbar-nav mr-auto mb-2 mb-lg-0 ">
              <li className="nav-item p-3">
                <a className="nav-link text-dark" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item p-3">
                <a className="nav-link text-dark" href="#">
                  Product
                </a>
              </li>
              <li className="nav-item p-3">
                <a className="nav-link text-dark" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item p-3">
                <a className="nav-link text-dark" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5">
          <h1 class="">LabTro</h1>
          <h2 class="">Laboratorium Website.</h2>
          <p class="lh-lg">
            This is the Telecommunication Systems Laboratory Website. This website was created by Nadiah Indrianti project for assignments
          </p>
            <a
              href="#"
              className="btn btn-primary btn-lg text-dark text-bold w-50"
              style={{
                background:" white ",
                border: "2px solid #0019fa",
                boxShadow: "0px 10px 35px rgba(63, 26, 75, 0.14)",
                fontWeight: 300
              }}
            >
              Contact Us
            </a>
          </div>
          <div className="col-md-5">
            <img src={Landing} alt="Gambar" className="img-fluid" />
          </div>
        </div>
        <div className="container mt-5">
        <div className="row">
        
          <div className="col-md-4">
          <img src={About} alt="Gambar" className="img-fluid" />
          </div>
          <div class="col-md-5">
          <h2>About Us</h2>
            <p className='mt-3'>Providing data access services for available laboratory equipment. Apart from that, you can access individual practicum equipment loans and get practicum modules that can be used as learning or practice.</p>
          </div>
        </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6">
            <h1 className="w-50">Contact us</h1>
            <p className="w-75 mt-5">
            Please contact us via this form if you have any questions
            </p>
          </div>
          <div className="col-md-6 form-group">
            <form action="" onSubmit={handleSubmit}>
              <div className="input-group">
                <div>
                  <label htmlFor="firstName">First Name*</label>
                  <input type="text" className="form-control" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="ml-3">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" className="form-control" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </div>
              </div>
              <div className="col-xs-6 mt-3">
                <label htmlFor="email">Email*</label>
                <input  type="email"  className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="col-xs-6 mt-3">
                <label htmlFor="email">What can we help you with?</label>
                <textarea className="form-control" name="" id="desc" rows={3} defaultValue={""} value={help} onChange={(e) => setHelp(e.target.value)}/>
              </div>
                <button
                  className="btn btn-lg text-dark text-bold w-25"
                  style={{
                    background:" white ",
                    border: "2px solid #0019fa",
                    boxShadow: "0px 10px 35px rgba(63, 26, 75, 0.14)",
                    fontWeight: 300
                  }}
                  type="submit"> Submit </button>
            </form>
          </div>
        </div>
      </div>
      <footer className="bg-light">
        <div className="container py-4">
          <div className="row bg-light">
            <div className="col-md-6">
              <h2>LabTro</h2>
              <p>Cirebon, Jawa Barat</p>
              <p>
              <b>Phone:</b>+1 5589 55488 55
              </p>
              <p></p>
              <p>
              <b>Email: </b>nadiahindrianti271@gmail.com
              </p>
              <div class="social-media">
                  <a href="https://www.instagram.com/nadiahindrianti" target="_blank"><img src="./assets/instagram.svg" alt="" /></a>
                  <a href="https://www.linkedin.com/in/nadiah-indrianti" target="_blank"><img src="./assets/linkedin.svg" alt="" /></a>
                  <a href="https://www.youtube.com/channel/UCVKkJWFcoCAl4j5o-nQ9KvA" target="_blank"><img src="./assets/youtube.svg" alt="" /></a>
              </div>
            </div>
            <div className="col-md-3">
              <h4>Usefull Links</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-dark">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark">
                    Product
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      </>
  )
}

export default App