import React from "react"
import icon from "../images/madeTechMountains.png"

const Header = () => {
    return (
        <header className="headerWrapper"> 
            <img className="icon" src={icon} alt="Made Tech" height="35px" />

            <h1>Made Tech Story Cubes</h1>
        </header>
    )
}

export default Header