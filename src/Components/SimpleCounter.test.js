import React from 'react'
import { render, fireEvent, waitForElement, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SimpleCounter from './SimpleCounter'

test('simple counter fireevent', async () => {
    render(<SimpleCounter />)
    userEvent.click(screen.getByText('+'));
    await waitForElement(() => screen.getByText('1'));
})
