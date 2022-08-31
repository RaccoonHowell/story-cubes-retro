import React from "react"
import { useDrag } from "react-dnd"

const DraggableDiv = ({id, emoji}) => {
    const [{isDragging}, drag] = useDrag(() => ({
        type: "div",
        item: {id: id, emoji: emoji},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        })
    }))

    return (
        <div 
            ref={drag} 
            className="gridSquare" 
            style={{border: isDragging ? "5px pink solid" : "blue 1px solid"}}
        >
            {emoji}
        </div>
    )
}

export default DraggableDiv