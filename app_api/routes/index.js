var express = require('express');
var router = express.Router();
var crtlQuestions = require('../controllers/questions')

// Home Page


// Create Project


// Project


// discover


// Questions
router.get('/qa', crtlQuestions.questionsListByUpvotes);
router.post('/qa', crtlQuestions.questionsCreate);
router.get('/qa/:questionid', crtlQuestions.questionsReadOne);
router.put('/qa/:questionid', crtlQuestions.questionsUpdateOne);
router.post('/qa/:questionid', crtlQuestions.questionsUpvote);
router.delete('/qa/:questionid', crtlQuestions.questionsDeleteOne);

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