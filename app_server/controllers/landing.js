/* GET home page */
module.exports.landing = function(req, res) {
  res.render('landing', {
    title: 'Home',
    pageHeader: {
      title: "Signup to read TJ's latest book as he writes it",
      strapline: "Read, comment, and follow along with TJ Dailey and observe his writing process from start to finish."
    }
  });
};
