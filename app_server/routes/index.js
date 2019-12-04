var express = require('express');
var router = express.Router();

var action = require("../controllers/main")

/* GET home page. */
router.get('/', action.homepage);
router.get('/createproject', action.createProject);
router.get('/project', action.project);
router.get('/trendingprojects', action.trendingProjects);
router.get('/newprojects', action.newProjects);
router.get('/agricultureprojects', action.agricultureProjects);
router.get('/profile', action.profile);


module.exports = router;
