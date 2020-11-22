import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import './Topbar.css'

function Topbar() {
    return(
      <Navbar bg="dark">
        <div className="NavbarText">Simple Twitter timeline app</div>
      </Navbar>
    )
}

export default Topbar