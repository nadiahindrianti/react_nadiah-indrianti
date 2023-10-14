import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import landing from '../assets/hero-landing.png'

export default function Login() {

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmail = (e) => {
    const value = e.target.value;
    if (value === ""){
        setEmailError('Email tidak boleh kosong');
    } else if (!/\S+@\S+/.test(value)){
        setEmailError('Email tidak valid')
    } else {
        setEmailError("");
    }
  }

  const handlePassword = (e) => {
    const value = e.target.value;
    if (value === ""){
        setPasswordError("Password tidak boleh kosong");
    } else if (value.length < 8) {
        setPasswordError("Password minimal 8 karakter")
    } else {
        setPasswordError("")
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const dummyUser = { email: "admin@gmail.com", password: "12345" };
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.email === email && user.password === password) {
      localStorage.setItem("isLoggedIn", true);
      navigate(`/product`);
    } else if (email === dummyUser.email && password === dummyUser.password) {
      localStorage.setItem("user", JSON.stringify(dummyUser));
      localStorage.setItem("isLoggedIn", true);
      navigate(`/product`);
    } else {
      setErrorMessage("Invalid email or password");
    }
  }

  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
    <div className="container h-200">
        <div className="row justify-content-center align-items-center h-100">
        <div className="col-lg-12 col-xl-11 mt-4">
            <div className="card text-black" style={{ borderRadius: 25 }}>
            <div className="card-body p-md-5">
                <div className="row justify-content-center">
                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Log In
                    </p>
                    <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                            <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="form3Example3c">
                                Email
                            </label>
                            <input type="email" id="email"className="form-control"onChange={handleEmail}/>{emailError && <p className='error-message text-danger'>{emailError}</p>}
                            </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw" />
                            <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="form3Example4c"> Password </label>
                            <input type="password" id="password" className="form-control"onChange={handlePassword}/> {passwordError && <p className='error-message text-danger'>{passwordError}</p>}
                            </div>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <Link to="/">
                                <button type="button" className="btn btn-dark btn-lg">
                                    Login
                                </button>
                            </Link>
                            <Link to="/register">
                                <button type="button" className="btn btn-dark btn-lg mx-5">
                                    Register
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
                <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                <img className="img-login" src={landing} alt="" srcSet="" />
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>
  )
}