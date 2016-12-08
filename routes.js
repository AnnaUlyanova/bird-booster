var db = require('./db')

module.exports = {
  getHome
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
