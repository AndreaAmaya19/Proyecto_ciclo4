import React from 'react'
import Button from '../Buttons/Buttons'
import Ownfooter from '../Footer/Ownfooter'
import { NavLink } from 'react-router-dom';
import "./Home.css"

export function Home() {
    return (

        <div>
            
            

            <div className="Home-page">
                Welcome to the Project Manager
            
                <div>
                    <NavLink to="/Login">
                        <button className = "Button-home-page">Log In</button>
                    </NavLink>
                </div>
            </div>

            <Ownfooter />
        
        </div>

    )
}