/* GET work page */
module.exports.index = function(req, res) {
  res.render('work', {
    title: 'Work',
    pageHeader: {
      title: 'More work by TJ Dailey',
    }
  });
};
