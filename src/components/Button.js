import React from "react"
import { useState } from "react"
import Grid from "./Grid"
import emojis from "../emojis"

const Button = ({text}) => {
    const [clicked, setClicked] = useState(false)
    const [emojiSelection, setEmojiSelection] = useState([])

    const shuffle = (array) => {
        return array.sort(() => Math.random() - 0.5)
    }

    const selectEmojis = () => {
        const shuffledEmojis = shuffle(emojis)

        setEmojiSelection(shuffledEmojis.slice(0, 9))
    }
    
    const gridImages = emojiSelection.map((emoji, index) => {
        return (
            <div className="gridImage" key={index}>{emoji}</div>
        )
    })

    const handleClick = () => {
        selectEmojis()
        setClicked(true)
    }
    
    return (
        <>
            <button onClick={handleClick}>{text}</button>
          
            {clicked ? <div>{gridImages}</div> : <h1>nope</h1>}
        </>
    )
}

export default Button