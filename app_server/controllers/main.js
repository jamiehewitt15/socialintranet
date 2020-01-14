var request = require('request');
var apiOptions = { server : "http://localhost:3000" };

module.exports.homepage = function(req, res){
    res.render('index', {   title: 'Solidaridad Intranet',
                            pageHeader: {
                                title: "Latest Updates",
                                strapline: "Welcome to the Solidaridad Intranet - Keep up to date with the latest news from the network."
                            },
                            fullName: "Jamie Hewitt",
                            description: "Developer of web applications, JavaScript, PHP, Java, Python, Ruby, Java, Node.js, etc.",
                            followers: 5234,
                            following: 3960,
                            regions: ["East Africa", "Central Africa", "Southern Africa", "West Africa", "Asia", "Europe", "South America", "North America"],
                            countries: ["Kenya", "Uganda", "Tanzania", "Ethiopia", "Rwanda", "DRC", "Zimbabwe", "India", "China", "Nigeria", "Brazil", "Bolivia"],
                            commodities: ["Coffee", "Tea", "Leather", "Gold", "Dairy", "Poultry", "Textiles", "Palm Oil", "Soy"],
                            news: 
                                [{
                                    title: "Proud to announce my first post",
                                    subTitle: "we've just won a new project!",
                                    text: "Hello World!! This is the text of my first post. Thank you for reading it!",
                                    time: "Monday 10am",
                                    user: "Rachel Wanyoike",
                                    following: true,
                                    profilePic: "/images/user-profile.png",
                                    likes: 42,
                                    tags: ["East Africa", "Kenya", "Coffee", "Sustainablility"]
                                },
                                {
                                    title: "Excited to announce my second post",
                                    subTitle: "we've just won another new project!",
                                    text: "Hello World!! This is the text of my second post. Thank you for reading it!",
                                    time: "Wednesday 5pm",
                                    user: "Jamie Hewitt",
                                    following: false,
                                    profilePic: "/images/user-profile.png",
                                    likes: 14,
                                    tags: ["Asia", "Tea", "Resiliance"]
                                
                                },
                                {
                                    title: "Another first post",
                                    subTitle: "we've just won a new project!",
                                    text: "Hello Team!! This is the text of my first post. Thank you for reading it!",
                                    time: "Tuesday 11:30am",
                                    user: "Fiona Bruce",
                                    following: false,
                                    profilePic: "/images/user-profile.png",
                                    likes: 22,
                                    tags: ["East Africa", "Kenya", "Coffee", "Sustainablility"]
                                },
                                {
                                    title: "Excited to announce my second post",
                                    subTitle: "we've just won another new project!",
                                    text: "Hello Friends!! This is the text of my second post. Thank you for reading it!",
                                    time: "Wednesday 5pm",
                                    user: "John Smith",
                                    following: true,
                                    profilePic: "/images/user-profile.png",
                                    likes: 9,
                                    tags: ["Asia", "Tea", "Resiliance"]
                                
                                },
                                {
                                    title: "Coffee Project Success",
                                    subTitle: "we've just won a new project!",
                                    text: "Hello World!! This is the text of my first post. Thank you for reading it!",
                                    time: "Monday 10am",
                                    user: "Rachel Wanyoike",
                                    following: true,
                                    profilePic: "/images/user-profile.png",
                                    likes: 32,
                                    tags: ["East Africa", "Kenya", "Coffee", "Sustainablility"]
                                },
                                {
                                    title: "Excited to announce new funding!",
                                    subTitle: "we've just won another new project!",
                                    text: "Hello World!! This is the text of my second post. Thank you for reading it!",
                                    time: "Wednesday 5pm",
                                    user: "Jamie Hewitt",
                                    following: false,
                                    profilePic: "/images/user-profile.png",
                                    likes: 3,
                                    tags: ["Asia", "Tea", "Resiliance"]
                                
                                },
                                {
                                    title: "New staff hired",
                                    subTitle: "we've just won a new project!",
                                    text: "Hello Team!! This is the text of my first post. Thank you for reading it!",
                                    time: "Tuesday 11:30am",
                                    user: "Fiona Bruce",
                                    following: false,
                                    profilePic: "/images/user-profile.png",
                                    likes: 22,
                                    tags: ["East Africa", "Kenya", "Coffee", "Sustainablility"]
                                },
                                {
                                    title: "Office has been painted",
                                    subTitle: "we've just won another new project!",
                                    text: "Hello Friends!! This is the text of my second post. Thank you for reading it!",
                                    time: "Friday 4pm",
                                    user: "John Smith",
                                    following: true,
                                    profilePic: "/images/user-profile.png",
                                    likes: 4,
                                    tags: ["Asia", "Tea", "Resiliance"]
                                
                                }
                            ]
                            
                                                            
                            
});
}

module.exports.newUser = function(req, res) {
    res.render('newUser', { title: 'Create a New User' });
};

module.exports.doNewUser = function(req, res){
    var requestOptions, path, postData;
    
    path = '/api/users';

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