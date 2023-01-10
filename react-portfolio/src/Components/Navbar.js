import React from 'react'

const Navbar = ({ logo }) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <img className="navbar-brand" src={logo} />
                    <div className="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg">
                        <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.78125 4.13046H21.0938C21.5252 4.13046 21.875 3.71953 21.875 3.21258V0.917879C21.875 0.410923 21.5252 0 21.0938 0H0.78125C0.349756 0 0 0.410923 0 0.917879V3.21258C0 3.71953 0.349756 4.13046 0.78125 4.13046ZM0.78125 13.3093H21.0938C21.5252 13.3093 21.875 12.8983 21.875 12.3914V10.0967C21.875 9.58972 21.5252 9.17879 21.0938 9.17879H0.78125C0.349756 9.17879 0 9.58972 0 10.0967V12.3914C0 12.8983 0.349756 13.3093 0.78125 13.3093ZM0.78125 22.488H21.0938C21.5252 22.488 21.875 22.0771 21.875 21.5702V19.2755C21.875 18.7685 21.5252 18.3576 21.0938 18.3576H0.78125C0.349756 18.3576 0 18.7685 0 19.2755V21.5702C0 22.0771 0.349756 22.488 0.78125 22.488Z" fill="white" />
                        </svg>
                    </div>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel"></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link" href="">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="">Project</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="">Experience</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="">Contact Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link ds-design" href="">Resume</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
