import "./App.css"
import React from "react"
import { useState } from "react"
import Button from "./components/Button"
import EmptyGrid from "./components/EmptyGrid"
// import Grid from "./components/Grid"
import Card from "./components/Card"
import emojis from "./emojis"
import mable1 from "/Users/rachel.howell/Desktop/story-cubes-retro/src/images/mable1.jpg"
import mable2 from "/Users/rachel.howell/Desktop/story-cubes-retro/src/images/mable2.jpg"
import mable3 from "/Users/rachel.howell/Desktop/story-cubes-retro/src/images/mable3.jpg"

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
                <Card header="Before Sprint" imageSource={mable1}/>
                <Card header="During Sprint" imageSource={mable2}/>
                <Card header="Future Sprints" imageSource={mable3}/>
            </section>
        </div>
    )
}

export default App
