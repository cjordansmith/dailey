var express = require('express');
var router = express.Router();
var ctrlLanding = require('../controllers/landing');
var ctrlWork = require('../controllers/work');
var ctrlOthers = require('../controllers/others');

/*  Home pages  */
router.get('/', ctrlLanding.landing);

/*  Work pages  */
router.get('/work', ctrlWork.index);

/*  Other pages */
router.get('/about', ctrlOthers.index);

module.exports = router;
