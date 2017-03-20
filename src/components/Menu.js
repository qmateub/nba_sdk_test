import React from 'react'
import { Link } from 'react-router'

const Menu = () => {
  return (
    <nav className="nav">
      <Link className="nav-link" to="/">Stats</Link>
      <Link className="nav-link" to="/other">Data</Link>
    </nav>
  )
}

export default Menu
