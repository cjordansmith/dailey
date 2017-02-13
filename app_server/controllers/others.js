/* GET about page */
module.exports.index = function(req, res) {
  res.render('generic-text', {
    title: 'About',
    pageHeader: {
      title: 'About the author'
    }
  });
};
