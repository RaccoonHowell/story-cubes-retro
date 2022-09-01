import React from "react"
import Image from "./Image"

const ImageRow = ({row}) => {
    return (
        <div className="row">
            <Image row={row} />
            <Image row={row} />
            <Image row={row} />
        </div>
    )
}

export default ImageRow