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
    // if (!birdComments[id]) {
    //   birdComments[id] = []
    // }
    //data.comments = birdComments[id]
    db.readComments(req.params.id, function(err, comments){
      data.comments = comments;
      res.render('bird', data)
    })
  }
}

function postBird (req, res) {
  var id = req.params.id
  db.postComment(id, {
     name: req.body.name,
     text: req.body.text
   }, function(err, data) {
     res.redirect('/bird/' + id)
   })
  // if (!birdComments[id]) {
  //   birdComments[id] = []
  // }
  // birdComments[id].push({
  //   name: req.body.name,
  //   text: req.body.text
  // })
}

function getAbout (req,res) {
  res.render('about')
}
