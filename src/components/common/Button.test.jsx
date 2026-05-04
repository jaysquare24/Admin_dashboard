import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

describe('Button Component', () => {
  it('renders the button with correct text', () => {
    render(<Button>Add Product</Button>)

    // Find button by accessible role + name
    const button = screen.getByRole('button', { name: /add product/i })
    expect(button).toBeInTheDocument()
  })

  it('calls the onClick handler when clicked', async () => {
    const handleClick = vi.fn() // mock function
    render(<Button onClick={handleClick}>Add Product</Button>)

    const button = screen.getByRole('button', { name: /add product/i })
    await userEvent.click(button)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('can be disabled via props', () => {
    render(<Button disabled>Add Product</Button>)

    const button = screen.getByRole('button', { name: /add product/i })
    expect(button).toBeDisabled()
  })
})