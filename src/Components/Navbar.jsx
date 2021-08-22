import React from 'react'
import propTypes from 'prop-types'
import {Link} from 'react-router-dom'
function Navbar(props) {

    return (
        <>
    <nav className= {`navbar navbar-expand-lg navbar-${props.theme} bg-${props.theme}`}>
    <div className="container-fluid d-flex">
<Link className="navbar-brand" to="/">{props.title}</Link>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    <li className="nav-item">
        <Link className="nav-Link active" aria-current="page" to="/">Home</Link>
    </li>
    <li className="nav-item">
        <Link className="nav-Link" to="/About">About</Link>
    </li>
    </ul>
    <div className="form-check form-switch ml-auto">
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.theme==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">{props.theme==='light'?'Dark Mode':'Light Mode'}</label>
</div>
</div>
</div>
</nav>
    </>
    )
}

Navbar.propTypes={
    title:propTypes.string.isRequired,
}

Navbar.defaultProps={
    title:"Text Utility Tool 📑",
}

export default Navbar
