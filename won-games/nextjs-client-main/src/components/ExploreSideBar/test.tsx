import { screen } from '@testing-library/react'
import { RenderWithTheme } from 'utils/test/helpers'

import ExploreSideBar from '.'
import mock from '__mocks__/ExploreSideBar'
import userEvent from '@testing-library/user-event'

describe('<ExploreSideBar />', () => {
  it('should render all components', () => {
    RenderWithTheme(<ExploreSideBar items={mock} onFilter={jest.fn} />)

    //headings
    expect(screen.getByRole('heading', { name: /price/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /sort by/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /system/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /genre/i })).toBeInTheDocument()

    //inputs
    expect(
      screen.getByRole('checkbox', { name: /under \$50/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('radio', { name: /low to high/i })
    ).toBeInTheDocument()
  }),
    it('should return selected items in onFilter', () => {
      const onFilter = jest.fn()

      RenderWithTheme(
        <ExploreSideBar
          items={mock}
          initialValues={{
            platforms: ['windows'],
            sort_by: 'low-to-high'
          }}
          onFilter={onFilter}
        />
      )

      userEvent.click(screen.getByLabelText(/windows/i))
      userEvent.click(screen.getByLabelText(/linux/i))

      expect(onFilter).toHaveBeenCalledTimes(3)

      expect(onFilter).toHaveBeenCalledWith({
        platforms: ['windows'],
        sort_by: 'low-to-high'
      })
    })
})
