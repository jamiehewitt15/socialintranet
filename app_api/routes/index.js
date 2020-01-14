var express = require('express');
var router = express.Router();
//var ctrlComments = require('../controllers/comment');
var crtlQuestions = require('../controllers/questions');
var crtlNews = require('../controllers/news');
var crtlUsers = require('../controllers/users');
//var crtlQuestions = require('../controllers/questions');

// Users
router.post('/users', crtlUsers.usersCreate);
router.get('/users/:userid', crtlUsers.usersReadOne);

// Home Page
router.get('/news/:newsid', crtlNews.newsReadOne);
router.get('/news/', crtlNews.newsList);
router.post('/news/:newsid', crtlNews.doNewsLike);
// router.get('/', crtlNews.newsListByLikes);
// router.post('/', crtlNews.newsCreate);


// router.get('/:questionid', crtlNews.newsReadOne);
// router.put('/:questionid', crtlNews.newsUpdateOne);
// router.post('/:questionid', crtlNews.newsUpvote);
// router.delete('/:questionid', crtlNews.newsDeleteOne);

// Create Project


// Project


// discover

// Home Page
//router.get('/:newsid', crtlNews.newsReadOne);
router.get('/qa/', crtlQuestions.questionsList);

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