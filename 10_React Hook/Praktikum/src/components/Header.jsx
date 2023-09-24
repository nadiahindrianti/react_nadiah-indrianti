import React from 'react'

export default function Header() {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary shadow p-3 mb-5 bg-body-tertiary rounded">
            <div className="container-fluid">
                <a className="navbar-brand">Header</a>
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
                <div id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a
                            className="nav-link btn btn-primary text-light"
                            aria-current="page"
                            href="#"
                        >
                            Home
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-primary" href="#">
                            Features
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-primary" href="#">
                            Pricing
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-primary">FAQs</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-primary" href="#">
                            About
                        </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}