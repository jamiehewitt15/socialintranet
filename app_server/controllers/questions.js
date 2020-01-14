var request = require('request');
var apiOptions = { server : "http://localhost:3000" };

module.exports.questionsList = function(req, res) {
    var requestOptions;
    var path;
    path = '/api/';
    requestOptions = {
        url: apiOptions.server + path,
        method: "GET",
        json:  {}
    };
    request(requestOptions,
            function(apierr, apires, apibody){
                if(apires.statusCode == 200 && apibody.length){
                    renderQA(req, res, apibody);
            }
        }
    );
};

module.exports.doQuestionsUpvotes = function(req, res) {
    var requestOptions;
    var path;
    path = '/api/' + req.params.newsid;

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
};
var renderQA = function(req, res, body){
    res.render('index', {   title: 'Q&A',
                            pageHeader: {
                                title: "Questions & Answers",
                                strapline: "Help you're colleagues by answering their questions and upvoting the answers"
                            }, 
                            questions: body
});
}
var renderQA = function(req, res){
    res.render('qa', {  title: 'Q&A',
                        pageHeader: {
                            title: "Questions & Answers",
                            strapline: "Help you're colleagues by answering their questions and upvoting the answers"
                        }, 
                        questions:  
                        [{
                            title: "What came first, the chicken or the egg?",
                            text: "I have always been curious about what came first... was it the the chicken or was it the egg?",
                            time: "Monday 10am",
                            user: "Rachel Wanyoike",
                            profilePic: "/images/user-profile.png",
                            upVotes: 2,
                            answered: false,
                            tags: ["East Africa", "Kenya", "Poultry", "Sustainablility"]
                        },
                        {
                            title: "Why did the chicken cross the road?",
                            text: "I have always been curious about why the chicken crossed the road...",
                            time: "Monday 10am",
                            user: "Rachel Wanyoike",
                            profilePic: "/images/user-profile.png",
                            upVotes: 2,
                            answered: true,
                            tags: ["East Africa", "Kenya", "Poultry", "Sustainablility"]
                        }]
                            
                        
                    });
                    }
