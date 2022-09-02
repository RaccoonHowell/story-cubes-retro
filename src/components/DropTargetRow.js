import React from "react"
import DropTarget from "./DropTarget"

const DropTargetRow = ({row}) => {
    return (
        <div className="row">
            <DropTarget row={row} />
            <DropTarget row={row} />
            <DropTarget row={row} />
        </div>
    )
}

export default DropTargetRow