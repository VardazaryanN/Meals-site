import React from 'react'
import "./Header.css";
import {Link} from 'react-router-dom'
function Header() {
	return (
		<nav className="navbar">
			<Link className="navbar-link" to={`/`}>Home</Link>
			<Link className="navbar-link" to={`/about`}>About</Link>
			<Link className="navbar-link" to={`/contact`}>Contact</Link>
		</nav>
	)
}

export default Header
