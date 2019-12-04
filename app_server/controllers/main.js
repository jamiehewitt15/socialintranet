module.exports.homepage = function(req, res){
    res.render('index', { title: 'Solidaridad Intranet' });
}

module.exports.createProject = function(req, res){
    res.render('createProject', { title: 'Create Project' });
}

module.exports.project = function(req, res){
    res.render('project', { title: 'Project' });
}

module.exports.trendingProjects = function(req, res){
    res.render('trendingprojects', { title: 'Trending Projects' });
}

module.exports.newProjects = function(req, res){
    res.render('newprojects', { title: 'New Projects' });
}

module.exports.agricultureProjects = function(req, res){
    res.render('agricultureprojects', { title: 'Agriculture Projects' });
}