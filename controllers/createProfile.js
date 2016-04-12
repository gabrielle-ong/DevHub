'use strict'
const Github = require('../models/githubClass')

// let githubApi = new Github()
function createProfile (req, res, next) {
  if (req.user) {
    let githubApi = new Github(req.user.github.access_token)
    console.log(githubApi)
    githubApi.getAllRepo(function () {
      githubApi.getRockStar()
      githubApi.getLanguages(function () {
      })
    })
  }
  next()
}

module.exports = createProfile