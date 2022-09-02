import React, {useState} from "react"
import {useDrop} from "react-dnd"

const DropTarget = ({row}) => {
    const [dropTargetContent, setDropTargetContent] = useState("")
 
    const [{isOver}, drop] = useDrop(() => ({
        accept: "div",
        drop: (item) => setDropTargetContent(item.emoji),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })
    }))

    const className = dropTargetContent ? "gridSquare" : row

    return (
            <div 
                ref={drop} 
                className={`imgHolder ${className}`}
                style={{boxShadow: isOver ? "0 0 20px #00ac32" : "none"}} 
            >
                {dropTargetContent}    
            </div>
    )
}

export default DropTarget