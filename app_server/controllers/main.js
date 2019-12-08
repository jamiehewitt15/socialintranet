module.exports.homepage = function(req, res){
    res.render('index', { title: 'Solidaridad Intranet' });
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
    res.render('chat', { title: 'chat' });
}

module.exports.profile = function(req, res){
    res.render('profile', { title: 'Profile Page' });
}