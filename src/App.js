import "./App.css"
import Button from "./components/Button"
import Grid from "./components/Grid"
import Card from "./components/Card"

const App = () => {
    return (
        <div className="page">
            <section className="column1">
                <Button text="Generate Images"/>

                <Grid />
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
