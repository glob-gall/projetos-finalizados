import { render, screen } from '@testing-library/react'

import OrderList from '.'

describe('<OrderList />', () => {
  it('should render the heading', () => {
    const { container } = render(<OrderList />)

    expect(screen.getByRole('heading', { name: /OrderList/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
