import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark ">
                <div className="container-fluid">
                    <div>
                        <Link className="navbar-brand text-white" to={'/'}>Redux API calling</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar