var express = require('express');
var router = express.Router();

var action = require("../controllers/main")
var newsController = require("../controllers/news")
var questionsController = require("../controllers/questions")

/* news */
router.get('/', newsController.newsList);
router.post('/', newsController.doNewNews);
router.get('/newsComment/:newsid/', newsController.newsComment);
router.post('/newsComment/:newsid/', newsController.doNewsComment);
router.post('/:newsid/newsLikes', newsController.doNewsLikes);
router.post('/:newsid/newsFavourite', newsController.doNewsFavourite);
router.post('/:newsid/newsReport', newsController.doNewsReport);

/* questions */
router.get('/qa', questionsController.questionsList);
router.post('qa/:questionsid/questionsUpVotes', questionsController.doQuestionsUpvotes);

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
