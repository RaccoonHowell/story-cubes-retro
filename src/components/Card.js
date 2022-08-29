import React from "react"
import ImageRow from "./ImageRow"
import Textarea from "react-expanding-textarea"

const Card = ({header}) => {
    return (
        <>
            <h1>{header}</h1>

            <ImageRow />

            <Textarea className="textarea" />
        </>
    )
}

export default Card