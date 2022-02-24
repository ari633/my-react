import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../../store/store'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Users from './Users'

test('loads and displays Users', async () => {
  render(<Provider store={store}><Users /></Provider>)
})
