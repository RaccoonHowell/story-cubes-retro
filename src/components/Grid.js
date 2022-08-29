import React from "react"
import ImageRow from "./ImageRow"
import Image from "./Image"

const Grid = () => {
    return (
        <div className="grid">
            <Image squareType="gridSquare" />
            <ImageRow />
            <ImageRow />
            <ImageRow />
        </div>
    )
}

export default Grid