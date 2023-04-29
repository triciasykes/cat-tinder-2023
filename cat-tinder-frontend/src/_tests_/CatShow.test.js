import { render, screen } from "@testing-library/react"
import CatShow from "../pages/CatShow"
import mockCats from  "../mockCats"
import { MemoryRouter, Route, Routes } from "react-router-dom"

const renderShow = () => {
  render(
  <MemoryRouter initialEntries={["/catshow/1"]}>
    <Routes>
        <Route path="catshow/:id" element={<CatShow cats={mockCats} />}/>
    </Routes>
  </MemoryRouter>
  )
}
describe("<CatShow />", () => {
  it("renders without crashing", () => {
    renderShow()
  })

  it('renders a card with what the cat enjoys', () =>{
    renderShow()  
    expect(screen.getByText(`${mockCats[0].name} likes ${mockCats[0].enjoys}`, { exact: false})).toBeInTheDocument()
  })
})
