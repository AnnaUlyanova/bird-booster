var db = require('./db')

module.exports = {
  getHome
  // getBirdByName
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

// function getBirdbyName (req, res) {
//   db.getBirdData(renderBirdNames)

//   function renderBirdNames (err, birds) {
//     var data = {
//       currentBird: birds
//     }
//   }
// }
