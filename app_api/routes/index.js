var express = require('express');
var router = express.Router();
var crtlQuestions = require('../controllers/questions');
var crtlNews = require('../controllers/news');
var crtlUsers = require('../controllers/users');

// Users
router.post('/users', crtlUsers.usersCreate);
router.get('/users/:userid', crtlUsers.usersReadOne);
router.get('/users', crtlUsers.usersList);

// Home Page
router.get('/:newsid', crtlNews.newsReadOne);
router.get('/', crtlNews.newsList);
router.post('/news', crtlNews.newsCreate);
router.post('/like/:newsid', crtlNews.doNewsLike);
router.post('/favourite/:newsid', crtlNews.doNewsFavourite);
router.post('/report/:newsid', crtlNews.doNewsReport);

// Questions
router.get('/qa', crtlQuestions.questionsList);
router.post('/qa/:questionid', crtlQuestions.doQuestionsUpvote);
router.get('/qa/:questionid', crtlQuestions.questionsReadOne);


// router.post('/qa', crtlQuestions.questionsCreate);
// router.get('/qa/:questionid', crtlQuestions.questionsReadOne);
// router.put('/qa/:questionid', crtlQuestions.questionsUpdateOne);

// router.delete('/qa/:questionid', crtlQuestions.questionsDeleteOne);

// Answers

// router.get('/qa', action.qa);

//chat


// Profile



module.exports = router;
