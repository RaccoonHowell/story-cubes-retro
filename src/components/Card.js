import React from "react"
import DropTargetRow from "./DropTargetRow"
import Textarea from "react-expanding-textarea"

const Card = ({header, row}) => {
    return (
        <>
            <h2>{header}</h2>
            
            <DropTargetRow row={row} />

            <Textarea className="textarea" />
        </>
    )
}

export default Card