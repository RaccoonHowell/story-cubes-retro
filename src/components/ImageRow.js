import React from "react"
import Image from "./Image"

const ImageRow = ({imageSource}) => {
    return (
        <div className="row">
            <Image imageSource={imageSource}/>
            <Image imageSource={imageSource}/>
            <Image imageSource={imageSource}/>
        </div>
    )
}

export default ImageRow