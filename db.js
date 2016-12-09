var fs = require ('fs')
var path = require('path')

var dataPath = path.join(__dirname, 'birdData.json')

module.exports = {
  getBirdData,
  readComments,
  postComment
}

function getBirdData (callback) {
  fs.readFile(dataPath, function (err, data) {
    var birds = JSON.parse(data)
    callback(null, birds)
  })
}

function readComments (id, callback){
  fs.readFile("feedbackData.json", function (err, data) {
    var comments = JSON.parse(data)[id]
    callback(null, comments)
  })
}

function postComment (id, comment, callback){
  fs.readFile("feedbackData.json", function (err, data) {
    var prevComments = JSON.parse(data)
    if (!prevComments[id])
      prevComments[id] = []
    prevComments[id].push(comment)

    fs.writeFile("feedbackData.json", JSON.stringify(prevComments), callback)

  })
}
