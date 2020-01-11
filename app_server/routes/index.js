var express = require('express');
var router = express.Router();

var action = require("../controllers/main")


router.get('/post', (req, res, next) => {
    res.json({
        'test': 'Hello World'
    })
});

router.post('/post', (req, res, next) => {
    console.log(req.body);
    
    res.json({
        'received': req.body
    })
});
/* GET home page. */
router.get('/', action.homepage);
router.get('/createproject', action.createProject);
router.get('/project', action.project);
router.get('/discover', action.discover);
router.get('/qa', action.qa);
router.get('/chat', action.chat);
router.get('/profile', action.profile);


module.exports = router;
