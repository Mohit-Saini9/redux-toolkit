import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const card = useSelector((state) => state.card)
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark ">
                <div className="container-fluid">
                    <div>
                        <Link className="navbar-brand text-white" to={'/'}>Home</Link>
                    </div>

                    <div>
                        <Link className="navbar-brand text-white" to='/cart'>Card</Link>
                        <Link className="navbar-brand text-white mx-2" >Item : {card.length}</Link>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default Navbar