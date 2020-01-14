var express = require('express');
var router = express.Router();
//var ctrlComments = require('../controllers/comment');
var crtlQuestions = require('../controllers/questions');
var crtlNews = require('../controllers/news');
var crtlUsers = require('../controllers/users');

// Users
router.post('/users', crtlUsers.usersCreate);
router.get('/users/:userid', crtlUsers.usersReadOne);

// Home Page
router.get('/:newsid', crtlNews.newsReadOne);
router.get('/', crtlNews.newsList);
router.post('/:newsid', crtlNews.doNewsLike);
// router.get('/', crtlNews.newsListByLikes);
// router.post('/', crtlNews.newsCreate);
// router.get('/:questionid', crtlNews.newsReadOne);
// router.put('/:questionid', crtlNews.newsUpdateOne);
// router.post('/:questionid', crtlNews.newsUpvote);
// router.delete('/:questionid', crtlNews.newsDeleteOne);

// Questions
router.post('/qa/:questionid', crtlQuestions.doQuestionsUpvote);
// router.get('/qa/:questionid', crtlQuestions.questionsReadOne);

// router.get('/qa', crtlQuestions.questionsListByUpvotes);
// router.post('/qa', crtlQuestions.questionsCreate);
// router.get('/qa/:questionid', crtlQuestions.questionsReadOne);
// router.put('/qa/:questionid', crtlQuestions.questionsUpdateOne);

// router.delete('/qa/:questionid', crtlQuestions.questionsDeleteOne);

// Answers

// router.get('/qa', action.qa);

//chat


// Profile



module.exports = router;
