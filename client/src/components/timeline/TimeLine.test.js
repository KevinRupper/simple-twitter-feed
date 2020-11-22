import { render, screen } from '@testing-library/react'
import TimeLine from './TimeLine'

describe('Test TimeLine component', () => {
    test('renders timeline component without data', () => {
        const request = async () => {}
        render(<TimeLine  request={request} />)
        expect(screen.getByText('Loading...')).toBeInTheDocument()
    })
})