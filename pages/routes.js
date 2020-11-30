const express = require('express')
const router = express.Router()

function routes() {
  router.get('/test', (req, res) => {
    res.end('It Works')
  })

  return router
}

module.exports = routes
