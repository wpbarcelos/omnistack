const express = require('express')
const routes = express.Router();

const TweeTController = require('./controllers/TweetController')
const LikeController = require('./controllers/LikeController')

routes.get('/tweets', TweeTController.index)
routes.post('/tweets', TweeTController.store)

routes.post('/likes/:id', LikeController.store)

module.exports = routes;