import { render, screen } from '@testing-library/react'
import MainContainer from './MainContainer'

describe('Test main container component', () => {
    test('renders main component and check if toopbar exists', () => {    
      render(<MainContainer />)
      expect(screen.getByText('Simple Twitter timeline app')).toBeInTheDocument();
    })
})