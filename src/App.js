import "./App.css"
import Button from "./components/Button"
import Grid from "./components/Grid"

const App = () => {
    return (
        <div className="page">
            <section className="column1">
                <Button text="Generate Images"/>

                <Grid />
            </section>

            <section className="column2">
                <Button text="Generate Images"/>

                <Grid />
            </section>
        </div>
    )
}

export default App
