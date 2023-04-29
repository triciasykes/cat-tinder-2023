import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import Header from "../components/Header"

describe("<Header />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
      div
    )
  })

  it("renders a log with a src and alt", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
      div
    )
    const logo = screen.getByRole("img")
    expect(logo).toHaveAttribute("src", "cat-logo.png")
    expect(logo).toHaveAttribute("alt", "Cat Tinder logo with two cats hugging")
  })

  it("has clickable links", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
      div
    )
    userEvent.click(screen.getByText(/meet the cats/i))
    expect(screen.getByText(/meet the cats/i)).toBeInTheDocument()
  })
})
