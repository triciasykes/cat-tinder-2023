import { render, screen } from "@testing-library/react"
import React from "react"
import { BrowserRouter } from "react-router-dom"

import mockCats from "../mockCats"
import CatIndex from "../pages/CatIndex"

describe("<CatIndex />", () => {
  it("renders cat cards", () => {
    render(
    <BrowserRouter>
    <CatIndex cats={mockCats} />
    </BrowserRouter>)

     mockCats.forEach((cat) => {
      let nameElement = screen.getByText(cat.name)
      expect(nameElement).toBeInTheDocument()
    })
  })
})
