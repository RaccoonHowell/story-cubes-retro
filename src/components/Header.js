import React from "react"
import icon from "../images/madeTechMountains.png"
// import logo from "../images/madeTechLogo.png"

const Header = () => {
    return (
        <header className="headerWrapper"> 
            <img className="icon" src={icon} alt="Made Tech" height="35px" />

            <h1>Made Tech Story Cubes</h1>
        </header>
        // <img className="logoHeader" src={logo} alt="Made Tech" width="200px" />
    )
}

export default Header