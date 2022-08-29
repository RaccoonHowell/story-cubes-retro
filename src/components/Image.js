import React from "react"
// import Draggable from "react-draggable"

const Image = ({imageSource, imageAlt}) => {
    return (
        // <Draggable>
            <div >
                <img 
                    src={imageSource}
                    alt={imageAlt} 
                    className="imgHolder" 
                    width="130px" 
                    height="130px" 
                />
            </div>

        // </Draggable>
    )
}

export default Image