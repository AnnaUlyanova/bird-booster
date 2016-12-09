var db = require('./db')

module.exports = {
  getHome,
  getBirdByID,
  getAbout,
  postBird
}

var birdComments = {}



function getHome (req,res) {
  db.getBirdData(renderBirds)

  function renderBirds (err, birds) {
    var data = {
      birds: birds
    }
  res.render('home', data)
  }
}

function getBirdByID (req, res) {
  db.getBirdData(renderBirdID)

  function renderBirdID (err, birds) {
    var id = req.params.id - 1
    var data = birds[id]
    if (!birdComments[id]) {
      birdComments[id] = []
    }
    data.comments = birdComments[id]
    res.render('bird', data)
  }
}

function postBird (req, res) {
  var id = req.params.id - 1
  if (!birdComments[id]) {
    birdComments[id] = []
  }
  birdComments[id].push({
    name: req.body.name,
    text: req.body.text
  })
  res.redirect('/bird/' + req.params.id)
}

function getAbout (req,res) {
  res.render('about')
}
