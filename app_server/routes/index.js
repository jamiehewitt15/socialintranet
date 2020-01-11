var express = require('express');
var router = express.Router();

var action = require("../controllers/main")

/* GET home page. */
router.get('/', action.homepage);
router.get('/createproject', action.createProject);
router.get('/project', action.project);
router.get('/discover', action.discover);
router.get('/qa', action.qa);
router.get('/chat', action.chat);
router.get('/profile', action.profile);


module.exports = router;
