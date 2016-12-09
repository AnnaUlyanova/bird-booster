var db = require('./db')

module.exports = {
  getHome,
  getBirdByID,
  getAbout,
  postBird
}

var birdComments = {}

// Returns the text in lower case without special characters.
function cleanText (text) {
  return text.toLowerCase().replace('ā', 'a')
}

function getHome (req,res) {
  db.getBirdData(renderBirds)

  var search = req.query.search

  function renderBirds (err, birds) {

    if (search) {
      birds = birds.filter(function (bird) {
        return cleanText(search).includes(cleanText(bird.name)) ||
          bird.description.includes(search)
      })
    }

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
