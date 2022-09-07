import "./App.css"
import React from "react"
import {useState} from "react"
import {DndProvider} from "react-dnd"
import {HTML5Backend} from "react-dnd-html5-backend"
import Header from "./components/Header"
import Button from "./components/Button"
import EmptyGrid from "./components/EmptyGrid"
import Card from "./components/Card"
import emojis from "./emojis"
import DraggableDiv from "./components/DraggableDiv"
import Instructions from "./components/Instructions"

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
    
    const gridItems = emojiSelection.map((emoji, index) => {
        return (
            <DraggableDiv emoji={emoji} key={index} />
        )
    })

    const handleClick = () => {
        selectEmojis()

        setClicked(true)
    }

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="page">
                

                <div className="flexContainer">
                    <section className="column1">
                    <Header />
                        <Instructions />

                        <Button text="Generate images" handleClick={handleClick} clicked={clicked}/>

                        <div className="gridContainer">
                            {clicked ? gridItems : <EmptyGrid />}
                        </div>
                    </section>

                    <section className="column2">
                        <Card header="Before sprint" row="row1"/>
                        <Card header="During sprint" row="row2"/>
                        <Card header="Future sprints" row="row3"/>
                    </section>
                </div>
            </div>
        </DndProvider>
    )
}

export default App
