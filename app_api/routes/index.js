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
//router.post('/', crtlNews.newsList);
router.get('/', crtlNews.newsList);
router.post('/news', crtlNews.newsCreate);
// router.get('/', crtlNews.newsListByLikes);
// router.post('/', crtlNews.newsCreate);
// router.get('/:questionid', crtlNews.newsReadOne);
// router.put('/:questionid', crtlNews.newsUpdateOne);
// router.post('/:questionid', crtlNews.newsUpvote);
// router.delete('/:questionid', crtlNews.newsDeleteOne);

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
