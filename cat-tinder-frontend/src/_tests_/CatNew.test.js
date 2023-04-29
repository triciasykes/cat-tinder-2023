import { screen, render } from '@testing-library/react'
import CatNew from '../pages/CatNew'
import { BrowserRouter } from 'react-router-dom'

describe("<CatNew />", () => {
  it ('renders a new cat form', () => {
    render(
      <BrowserRouter>
      <CatNew />
      </BrowserRouter>
    )
    expect(screen.getAllByRole('textbox', { exact: false })).toBeTruthy()
  })
})