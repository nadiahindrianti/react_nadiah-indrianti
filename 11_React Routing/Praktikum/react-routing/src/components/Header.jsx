import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary shadow p-3 mb-5 bg-body-tertiary rounded">
            <div className="container-fluid">
                <a className="navbar-brand">Simple Header</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link to="/" className='text-decoration-none'>
                            <a
                                className="nav-link text-primary"
                                aria-current="page"
                                href="#">
                                Home
                            </a>
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/create-product" className='text-decoration-none'>
                            <a className="nav-link text-primary" href="#">
                                Create Product
                            </a>
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/" className='text-decoration-none'>
                            <a
                                className="nav-link text-primary"
                                aria-current="page"
                                href="#">
                                Pricing
                            </a>
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/" className='text-decoration-none'>
                            <a
                                className="nav-link text-primary"
                                aria-current="page"
                                href="#">
                                FAQs
                            </a>
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/" className='text-decoration-none'>
                            <a
                                className="nav-link text-primary"
                                aria-current="page"
                                href="#">
                                About
                            </a>
                        </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}
