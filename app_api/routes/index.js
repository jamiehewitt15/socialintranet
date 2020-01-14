var express = require('express');
var router = express.Router();
//var ctrlComments = require('../controllers/comment');
var crtlQuestions = require('../controllers/questions');
var crtlNews = require('../controllers/news');
var crtlUsers = require('../controllers/users');
var crtlQuestions = require('../controllers/questions');

// Users
router.post('/users', crtlUsers.usersCreate);
router.get('/users/:userid', crtlUsers.usersReadOne);

// Home Page
router.get('/:newsid', crtlNews.newsReadOne);
router.get('/', crtlNews.newsList);
// router.get('/', crtlNews.newsListByLikes);
// router.post('/', crtlNews.newsCreate);
// router.get('/:questionid', crtlNews.newsReadOne);
// router.put('/:questionid', crtlNews.newsUpdateOne);
// router.post('/:questionid', crtlNews.newsUpvote);
// router.delete('/:questionid', crtlNews.newsDeleteOne);

// Create Project


// Project


// discover


// Questions
// router.get('/questions/:questionid', crtlQuestions.questionsReadOne);

// router.get('/qa', crtlQuestions.questionsListByUpvotes);
// router.post('/qa', crtlQuestions.questionsCreate);
// router.get('/qa/:questionid', crtlQuestions.questionsReadOne);
// router.put('/qa/:questionid', crtlQuestions.questionsUpdateOne);
// router.post('/qa/:questionid', crtlQuestions.questionsUpvote);
// router.delete('/qa/:questionid', crtlQuestions.questionsDeleteOne);

// Answers

// router.get('/qa', action.qa);

//chat


// Profile



module.exports = router;

// /* POST test. */
// router.get('/post', (req, res, next) => {
//     res.json({
//         'test': 'Hello World'
//     })
// });

// router.post('/post', (req, res, next) => {
//     console.log(req.body);
    
//     res.json({
//         'received': req.body
//     })
// });