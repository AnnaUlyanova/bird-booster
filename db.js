var fs = require ('fs')
var path = require('path')

var dataPath = path.join(__dirname, 'birdData.json')

module.exports = {
  getBirdData: getBirdData
}

function getBirdData (callback) {
  fs.readFile(dataPath, function (err, data) {
    var birds = JSON.parse(data)
    callback(null, birds)
  })
}
