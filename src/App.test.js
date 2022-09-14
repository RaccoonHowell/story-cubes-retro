import { render, screen } from "@testing-library/react"
import App from "./App"

describe("App component", () => {
    it("renders landing page", () => {
        render(<App />)
        
        const h1Element = screen.getByText(/Made Tech Story Cubes/i)
        // const h2Element = screen.getByText(/random multiple choice questions/i)
        // const buttonElement = screen.getByText(/generate images/i)

        expect(h1Element).toBeInTheDocument()
        // expect(h2Element).toBeInTheDocument()
        // expect(buttonElement).toBeInTheDocument()
    })

    // it("changes to check answers button when landing page start quiz button is clicked", () => {
    //     render(<App />)

    //     const startQuizButton = screen.getByText(/start quiz/i)
               
    //     fireEvent.click(startQuizButton)

    //     expect(screen.getByText(/check answers/i)).toBeInTheDocument()
    // })
})
