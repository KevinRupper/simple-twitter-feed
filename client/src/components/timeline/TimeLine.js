import React from 'react'
import Tweet from '../tweet/Tweet'
import CardColumns from 'react-bootstrap/CardColumns'
import './TimeLine.css'

class TimeLine extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      data: null
    };
  }
  
  componentDidMount() {
    const request = async () => {
      const response = await fetch('/api/home_timeline/20')
      const res = await response.json()
      return res;
    }

    request().then(res => {
      this.setState({ isLoaded: true, data: res.data})
    },
    error => {
      this.setState({ isLoaded: true, error})
    })
  }

  render() {
    const { error, isLoaded, data } = this.state

    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      const tweets = selectTweetData(data)
      return(
        <CardColumns>
          {tweets.map(tweet => <Tweet key={tweet.id} data={tweet}/>)}
        </CardColumns>
      )
    }
  }
}

function selectTweetData(data) {
  return data.map(tweet => {
    return {
      id: tweet.id,
      full_text: tweet.full_text,
      user: tweet.user.name,
      profile_img: tweet.user.profile_image_url
    }
  })
}

export default TimeLine