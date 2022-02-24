import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import FilterForm from './FilterForm'

test('loads and displays FilterForm', async () => {
  render(<FilterForm />)
  screen.getByLabelText('Search', { selector: 'input' })
  screen.getByLabelText('Gender', { selector: 'input' })
  expect(screen.getByTestId('button-reset')).toHaveTextContent('Reset Filter')
})
