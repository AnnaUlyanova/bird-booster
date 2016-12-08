var db = require('./db')

module.exports = {
  getHome,
  getBirdByID,
  getAbout
}

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
    var data = birds[req.params.id-1]
  res.render('bird', data)
  }
}

function getAbout (req,res) {
  res.send('this is our about page')
}
