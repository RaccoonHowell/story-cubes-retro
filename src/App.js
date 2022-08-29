import "./App.css"
import React from "react"
import { useState } from "react"
import Button from "./components/Button"
import EmptyGrid from "./components/EmptyGrid"
// import Grid from "./components/Grid"
import Card from "./components/Card"
import emojis from "./emojis"

const App = () => {
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
            <div className="gridSquare" key={index}>{emoji}</div>
        )
    })

    const handleClick = () => {
        selectEmojis()
        setClicked(true)
    }

    return (
        <div className="page">
            <section className="column1">
                <Button text="Generate Images" handleClick={handleClick} clicked={clicked}/>

                <div className="gridContainer">
                    {clicked ? gridImages : <EmptyGrid />}
                </div>
            </section>

            <section className="column2">
                <Card header="Before Sprint"/>
                <Card header="During Sprint"/>
                <Card header="Future Sprints"/>
            </section>
        </div>
    )
}

export default App
