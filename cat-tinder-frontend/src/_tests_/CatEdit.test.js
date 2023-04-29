import { render, screen } from '@testing-library/react'
import CatEdit from '../pages/CatEdit'
import mockCats from '../mockCats'

describe("<CatEdit />", () => {
  it ("shows a form with editable data", () => {
    let cat = mockCats[0]
    render(<CatEdit cat={cat} />)
    expect(screen.getByText(cat.name)).toBeInTheDocument()
  })
})