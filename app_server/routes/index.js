var express = require('express');
var router = express.Router();

var action = require("../controllers/main")
var newsController = require("../controllers/news")

/* news */
router.get('/', newsController.newsList);
router.post('/:newsid/newsLikes', newsController.doNewsLikes);

/* questions */
router.get('/qa', action.qa);

/* users */
router.get('/newuser', action.newUser);
router.post('/newuser', action.doNewUser);

/* other */
router.get('/createproject', action.createProject);
router.get('/project', action.project);
router.get('/discover', action.discover);
router.get('/chat', action.chat);
router.get('/profile', action.profile);

module.exports = router;
