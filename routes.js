module.exports = {
  getHome
}

function getHome (req,res) {
 res.render('home', {})
}
