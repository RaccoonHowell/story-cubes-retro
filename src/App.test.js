import { render, screen } from "@testing-library/react"
import App from "./App"

test("renders generate images button", () => {
    render(<App />)

    const buttonElement = screen.getByText(/generate images/i)
    
    expect(buttonElement).toBeInTheDocument()
})
