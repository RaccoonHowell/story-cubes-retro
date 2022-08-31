import React from "react"

const Image = ({imageSource, imageAlt}) => {
    return (
            <div>
                <img 
                    src={imageSource}
                    alt={imageAlt} 
                    className="imgHolder" 
                    width="130px" 
                    height="130px" 
                />
            </div>
    )
}

export default Image