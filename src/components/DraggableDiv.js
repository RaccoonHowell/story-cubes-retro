import React from "react"
import { useDrag } from "react-dnd"

const DraggableDiv = ({emoji}) => {
    const [{isDragging}, drag] = useDrag(() => ({
        type: "div",
        item: {emoji: emoji},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }), 
    }), [emoji])

    return (
        <div 
            ref={drag} 
            className="gridSquare" 
            style={{border: isDragging ? "#00AC32 1px solid" : "black 1px solid"}}
        >
            {emoji}
        </div>
    )
}

export default DraggableDiv