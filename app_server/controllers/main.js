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
                            posts: 
                                [{
                                    title: "Proud to announce my first post",
                                    subTitle: "we've just won a new project!",
                                    text: "Hello World!! This is the text of my first post. Thank you for reading it!",
                                    time: "Monday 10am",
                                    user: "Rachel Wanyoike",
                                    profilePic: "/images/user-profile.png",
                                    tags: ["East Africa", "Kenya", "Coffee", "Sustainablility"]
                                },
                                {
                                    title: "Excited to announce my second post",
                                    subTitle: "we've just won another new project!",
                                    text: "Hello World!! This is the text of my second post. Thank you for reading it!",
                                    time: "Wednesday 5pm",
                                    user: "Jamie Hewitt",
                                    profilePic: "/images/user-profile.png",
                                    tags: ["Asia", "Tea", "Resiliance"]
                                
                                }
                            ]
                            
                                                            
                            
});
}

module.exports.createProject = function(req, res){
    res.render('createProject', { title: 'Create Project' });
}

module.exports.project = function(req, res){
    res.render('project', { title: 'Project' });
}

module.exports.discover = function(req, res){
    res.render('discover', { title: 'Discover' });
}

module.exports.qa = function(req, res){
    res.render('qa', { title: 'Q&A' });
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