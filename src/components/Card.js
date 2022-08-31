import React from "react"
import ImageRow from "./ImageRow"
import Textarea from "react-expanding-textarea"

const Card = ({header, imageSource}) => {
    return (
        <>
            <h1>{header}</h1>
            
            <ImageRow imageSource={imageSource} />

            <Textarea className="textarea" />
        </>
    )
}

export default Card