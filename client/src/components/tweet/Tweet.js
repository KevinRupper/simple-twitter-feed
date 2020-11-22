import React from 'react'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import './Tweet.css'

class Tweet extends React.Component {
  
  render() {
    return (
      <Card bg='light' className="Tweet">
        <Card.Header>
          <Image src={this.props.data.profile_img} rounded /> {this.props.data.user}
        </Card.Header>
        <Card.Body>
          <Card.Title>{this.props.location} </Card.Title>
          <Card.Text>
            {this.props.data.full_text}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default Tweet