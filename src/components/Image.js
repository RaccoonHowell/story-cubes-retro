import React from "react"
// import Draggable from "react-draggable"
import me from "/Users/rachel.howell/Desktop/story-cubes-retro/src/images/mable1.jpg"

const Image = () => {
    return (
        // <Draggable>
            <div >
                <img className="imgHolder" alt="chow chow" width="130px" height="130px" src={me} />
            </div>

        // </Draggable>
    )
}

export default Image