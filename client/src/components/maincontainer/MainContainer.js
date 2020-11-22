import React from 'react'
import Container from 'react-bootstrap/Container'
import Topbar from '../topbar/Topbar'
import TimeLine from '../timeline/TimeLine'

class MainContainer extends React.Component {
    render() {
        return (
            <Container>
                <Topbar></Topbar>
                <TimeLine></TimeLine>
            </Container>
        );
    }
}

export default MainContainer