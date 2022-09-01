import React, { useState } from "react"
import { useDrop } from "react-dnd"

const Image = ({row}) => {
    const [imageContent, setImageContent] = useState("")
 
    const [{isOver}, drop] = useDrop(() => ({
        accept: "div",
        drop: (item) => setImageContent(item.emoji),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })
    }))

    const className = imageContent ? "gridSquare" : row

    return (
            <div 
                ref={drop} 
                className={`imgHolder ${className}`}
                style={{boxShadow: isOver ? "0 0 20px #00ac32" : "none"}} 
            >
                {imageContent}    
            </div>
    )
}

export default Image