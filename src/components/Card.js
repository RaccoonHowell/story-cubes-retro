import React from "react"
import ImageRow from "./ImageRow"

const Card = ({header}) => {
    return (
        <>
            <h1>{header}</h1>

            <ImageRow />

            <textarea/>
        </>
    )
}

export default Card