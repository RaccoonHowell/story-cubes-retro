import React from "react"
import Draggable from "react-draggable"

const Image = ({squareType}) => {
    return (
        // <Draggable>
            <div className={`imgHolder ${squareType}`}></div>
        // </Draggable>
    )
}

export default Image