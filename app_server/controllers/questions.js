var request = require('request');
var apiOptions = { server : "http://social-intranet.herokuapp.com/" };

module.exports.questionsList = function(req, res) {
    console.log('questionsList start')
    var requestOptions;
    var path;
    path = '/api/qa';
    requestOptions = {
        url: apiOptions.server + path,
        method: "GET",
        json:  {}
    };
    request(requestOptions,
            function(apierr, apires, apibody){
                if(apires.statusCode == 200 && apibody.length){
                    renderQA(req, res, apibody);
                    console.log('renderQA ')
            }
        }
    );
    console.log('questionsList finished')
};

module.exports.doQuestionsUpvotes = function(req, res) {
    console.log('start doQuestionsUpvotes')
    var requestOptions;
    var path;
    path = '/api/qa/' + req.params.questionsid;

    requestOptions = {
        url: apiOptions.server + path,
        method: "POST",
        json:  {}
    };
    request(requestOptions,
        function(apierr, apires, apibody){
            {
                res.redirect('/qa');
        }
    }
);
console.log('finish doQuestionsUpvotes')
};

var renderQA = function(req, res, body){
    res.render('qa', {   
                            title: 'Q&A',
                            pageHeader: {
                                title: "Questions & Answers",
                                strapline: "Help you're colleagues by answering their questions and upvoting the answers"
                            }, 
                            questions: body
});
console.log("renderQA finished");
}

