const express = require('express')
const Twitter = require('twit')
require('dotenv').config()

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

const port = 5000
const app = express()

app.use(require('cors')())
app.use(require('body-parser').json())

app.get('/api/home_timeline', (req, res) => {
  const params = { tweet_mode: 'extended', count: 10 };
 
  client
    .get(`statuses/home_timeline`, params)
    .then(timeline => {
      console.log(timeline)
      res.send(timeline)
    })
    .catch(error => { res.send(error) })
});
 
app.listen(port, () => console.log(`Listening on port ${port}`))
