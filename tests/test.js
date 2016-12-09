var test = require('tape')
var request = require ('supertest')
var cheerio = require('cheerio')

var server = require('../server')

test('server is returning homepage', function(t) {
  var expected = "Bird Booster 9000";
  request(server)
  .get('/')
  .end(function (err, res) {
    var $ = cheerio.load(res.text);
    var actual = $('title').text();
    t.equal(actual, expected, "found title");
    t.end();
  })
})
