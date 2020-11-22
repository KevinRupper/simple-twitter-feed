import { render, screen } from '@testing-library/react'
import Topbar from './Topbar'

describe('Test Topbar component', () => {
    test('renders topbar component and check main title', () => {    
      render(<Topbar />)
      expect(screen.getByText('Simple Twitter timeline app')).toBeInTheDocument();
    })
})