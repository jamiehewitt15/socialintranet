var request = require('request');
var apiOptions = { server : "http://localhost:3000" };

module.exports.newUser = function(req, res) {
    res.render('newUser', { title: 'Create a New User' });
};

module.exports.doNewUser = function(req, res){
    var requestOptions, path, postData;
    
    path = '/api/users';
    console.log("doNewUser start")
    postData = {
        name: req.body.name,
        description: req.body.description
        
    };
    requestOptions = {
        url: apiOptions.server + path,
        method: 'POST',
        json: postData
    };
    request(requestOptions,
        function(apierr, apires, apibody){
            res.redirect('/')
        }
    );
    console.log("doNewUser finished")
}



module.exports.createProject = function(req, res){
    res.render('createProject', { title: 'Create Project' });
}

module.exports.project = function(req, res){
    res.render('project', { title: 'Project' });
}

module.exports.discover = function(req, res){
    res.render('discover', {    title: 'Discover',
                                pageHeader: {
                                    title: "Discover news and updates",
                                    strapline: "Click on the tags to discover content"
                                }, 
 });
}

module.exports.qa = function(req, res){
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

module.exports.chat = function(req, res){
    res.render('chat', {    title: 'chat',
                            groups: ["Coffee Team", "Kenya Team", "Management", "IT Issues"],
                            recentContacts: ["John Johnson", "Sally Saunders", "Matt Mathews", "Rachel Richards"],
                            names: ["Nathaneal Down","Natalya Deck","Gustav Purpleson","Alan Fresco","Sarah Purpleson","Juliet Fresco","Valentino Morose","Ruby Von Rails","Hilary Ouse","Richard Tea","Nigel Hollandaise","Gideon Guernsey-Marmaduke","Fig Nelson","Hugh Saturation","Gordon Norman","Abraham Pigeon","Jason Response","Piff Jenkins","Maggie Morose","Rachel Rails","Hilary Hornet"],
                            messages: {
                                jamieToJohnMessages: ["Hi, John", "How are you doing?", "Awesome, I'm good too"],
                                johnToJamieMessages: ["Hey Jamie", "I'm good thanks, how are you?"],
                            }
                                
                    
                            
                         
});
}

module.exports.profile = function(req, res){
    res.render('profile', { title: 'Profile Page' });
}