import React from 'react'
import { getByText, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AddItem from './AddItem'

test('add new item', () => {
    render(<AddItem />)
    userEvent.type(screen.getByPlaceholderText('Add Item'), "add item")
    userEvent.click(screen.getByDisplayValue('Add Item Button'))
    expect(getByText('add item')).toBeInTheDocument();
})
