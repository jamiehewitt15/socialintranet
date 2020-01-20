var request = require('request');
var apiOptions = { server : "http://localhost:3000" };

module.exports.newsList = function(req, res) {
    // var requestOptions;
    // var path;
    // path = '/api/';
    // requestOptions = {
    //     url: apiOptions.server + path,
    //     method: "GET",
    //     json:  {}
    // };
    // request(requestOptions,
    //         function(apierr, apires, apibody){
    //             if(apires.statusCode == 200 && apibody.length){
                    renderHomepage(req, res);
    //         }
    //     }
    // );
};

module.exports.newsComment = function(req, res) {
    console.log("SERVER newsComment start")
    var requestOptions;
    var path;
    path = '/api/' +  req.params.newsid;
    console.log(" get request sent to: " + '/api/' +  req.params.newsid)
    requestOptions = {
        url: apiOptions.server + path,
        method: "GET",
        json:  {}
    };
    request(requestOptions,
            function(apierr, apires, apibody){
                if(apires.statusCode == 200 ){
                    renderNews(req, res, apibody);
            } 
        }
    );
    console.log("SERVER newsComment finished")
};

module.exports.doNewNews = function(req, res){
    var requestOptions, path, postData;
    
    path = '/api/news';
    console.log("doNewNews start")
    postData = {
        user: req.body.user,
        title: req.body.title,
        subTitle: req.body.subTitle,
        text: req.body.text,
        regionTag: req.body.regionTag,
        countryTag: req.body.countryTag,
        commodityTag: req.body.commodityTag,
        
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
    console.log("doNewNews finished")
}

module.exports.doNewsLikes = function(req, res) {
    var requestOptions;
    var path;
    path = '/api/like/' + req.params.newsid;

    requestOptions = {
        url: apiOptions.server + path,
        method: "POST",
        json:  {}
    };
    request(requestOptions,
        function(apierr, apires, apibody){
            {
                res.redirect('/');
        }
    }
);
};

module.exports.doNewsFavourite = function(req, res) {
    var requestOptions;
    var path;
    path = '/api/favourite/' + req.params.newsid;

    requestOptions = {
        url: apiOptions.server + path,
        method: "POST",
        json:  {}
    };
    request(requestOptions,
        function(apierr, apires, apibody){
            {
                res.redirect('/');
        }
    }
);
};
module.exports.doNewsReport = function(req, res) {
    console.log("doNewsReport started");
    var requestOptions;
    var path;
    path = '/api/report/' + req.params.newsid;

    requestOptions = {
        url: apiOptions.server + path,
        method: "POST",
        json:  {}
    };
    request(requestOptions,
        function(apierr, apires, apibody){
            {
                res.redirect('/');
        }
    }
);
console.log("doNewsReport finished");
};

module.exports.doNewsComment = function(req, res){
    var requestOptions, path, news, postData;
    newsid = req.params.newsid;
    path = '/api/' + newsid + '/comment';
    postData = {
        name: req.body.name,
        comment: req.body.comment
    };
    requestOptions = {
        url: apiOptions.server + path,
        method: 'POST',
        json: postData
    };
    request(requestOptions,
        function(apierr, apires, apibody){
            res.redirect('/newsComment/' + newsid)
        }
    );
}


var renderHomepage = function(req, res){
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
                           
                            
});
}


var renderNews = function(req, res, body){
    console.log("Start renderNews")
    res.render('newsComment', {   title: 'Solidaridad Intranet',
                            pageHeader: {
                                title: "News Post",
                                strapline: "Welcome to the Solidaridad Intranet - Keep up to date with the latest news from the network."
                            },
                            fullName: "Jamie Hewitt",
                            description: "Developer of web applications, JavaScript, PHP, Java, Python, Ruby, Java, Node.js, etc.",
                            followers: 5234,
                            following: 3960,
                            regions: ["East Africa", "Central Africa", "Southern Africa", "West Africa", "Asia", "Europe", "South America", "North America"],
                            countries: ["Kenya", "Uganda", "Tanzania", "Ethiopia", "Rwanda", "DRC", "Zimbabwe", "India", "China", "Nigeria", "Brazil", "Bolivia"],
                            commodities: ["Coffee", "Tea", "Leather", "Gold", "Dairy", "Poultry", "Textiles", "Palm Oil", "Soy"],
                            news: body,
                            
});
}
