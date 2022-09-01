import React from "react"
import ImageRow from "./ImageRow"
import Textarea from "react-expanding-textarea"

const Card = ({header, row}) => {
    return (
        <>
            <h1>{header}</h1>
            
            <ImageRow row={row} />

            <Textarea className="textarea" />
        </>
    )
}

export default Card