import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand">SJ</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link to='/' className='link'><a className="nav-link" href='/'>Home <span className="sr-only">(current)</span></a></Link>
      </li>
      <li className="nav-item">
      <Link to='/about' className='link'><a className="nav-link" href="#">About</a></Link>
      </li>
      <li className="nav-item">
      <Link to='/skills' className='link'><a className="nav-link" href="#">Skills</a></Link>
      </li>
      <li className="nav-item">
      <Link to='/projects' className='link'><a className="nav-link" href="#">Projects</a></Link>
      </li>
    </ul>
  </div>
</nav>
    </>
  )
}

export default Navbar
