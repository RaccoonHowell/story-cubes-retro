import React, { useState } from "react"
import { useDrop } from "react-dnd"

const Image = ({row}) => {
    const [imageContent, setImageContent] = useState("")
 
    const [{isOver}, drop] = useDrop(() => ({
        accept: "div",
        drop: (item) => console.log(item),
        // drop: (item) => setImageContent(item.emoji),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })
    }))

    return (
            <div 
                ref={drop} 
                className={`imgHolder gridSquare ${row}`}
                style={{border: isOver ? "green solid 5px" : "black solid 1px"}} 
            >
                {imageContent}    
            </div>
    )
}

export default Image