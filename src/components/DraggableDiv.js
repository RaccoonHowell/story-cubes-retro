import React from "react"
import { useDrag } from "react-dnd"

const DraggableDiv = ({emoji}) => {
    const [{isDragging}, drag] = useDrag(() => ({
        type: "div",
        // drag: () => console.log(emoji),
        item: {emoji: emoji},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        })
    }))

    return (
        <div 
            ref={drag} 
            className="gridSquare" 
            style={{opacity: isDragging ? "0.2" : "1"}}
        >
            {emoji}
        </div>
    )
}

export default DraggableDiv