import { render, screen } from '@testing-library/react'
import Tweet from './Tweet'

describe('Test Tweet component', () => {
    test('renders tweet component with data', () => {
        const inputData = {
            id: 2,
            full_text: "Hello, I'm your father",
            user: "Vader",
            profile_img: "http://image"
        }
    
      render(<Tweet  data={inputData} />)
      expect(screen.getByText('Vader')).toBeInTheDocument();
      expect(screen.getByText('Hello, I\'m your father')).toBeInTheDocument();
    })
})

