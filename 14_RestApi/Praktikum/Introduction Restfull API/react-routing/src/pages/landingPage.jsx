import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';
import '../Main.css';
import Hero from '../assets/hero-landing.png';

export default function LandingPage() {

  return (
    <> 
        <Header />
        {/* main */}
        <main className="contents">
            <div className="row">
            <div className="content-wrapper">
                <div style={{ marginLeft: "auto", marginTop: "15rem" }}>
                <h1>Better Solutions For Your Business</h1>
                <p style={{ color: "rgba(255, 255, 255, 0.6)" }}>
                    We are team of talented designers making website with Bootstrap
                </p>
                <button id="subStart" type="submit">
                    Get Started
                </button>
                <button id="subWatch" type="submit">
                    Watch Video
                </button>
                </div>
                <img className="img-landing" src={Hero} alt="" srcSet="" />
            </div>
            <div className="content-two-wrapper">
                <h1>Join Our Newslatter</h1>
                <p>
                Tamen quem nulla quae legam multos aute sint culpa legam noster magna
                </p>
                <div className="content-join">
                <input type="text" />
                <br />
                <br />
                <button>Get Started</button>
                </div>
            </div>
            </div>
        </main>
        {/* footer */}
        <Footer />
        <div className="footer-down">
            <p style={{ marginRight: "auto", marginLeft: 80 }}>
            © Copyright <b>Arsha</b>. All Rights Reserved
            </p>
            <p style={{ marginLeft: "auto", marginRight: 80 }}>
            Designed by BootstrapMade
            </p>
        </div>
    </>
  )
}