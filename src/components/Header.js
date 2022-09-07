import React from "react"
import icon from "../images/madeTechMountains.png"

const Header = () => {
    return (
        <div className="header">
            <header className="headerWrapper"> 
                <img className="icon" src={icon} alt="Made Tech" height="35px" />

                <h1>Made Tech Story Cubes</h1>
            </header>
{/*             
            <section className="instructions">
                <h3>How to play:</h3>

                <p>Press 'Generate Images' and pick 3 images that best represent the time just before the sprint started (drag these to the 'Before Sprint' section)</p>

                <p>Press 'Generate Images' again, and then pick 3 images that best represent the time during the sprint (drag these to the 'During Sprint' section)</p>
            
                <p>Press 'Generate Images' again, and then pick 3 images that best represent what the future may hold for us (drag these to the 'Future Sprints' section)</p> */}
            {/* </section> */}
        </div>
    )
}

export default Header