var request = require('request');
var apiOptions = { server : "http://localhost:3000" };

module.exports.newsList = function(req, res) {
    var requestOptions;
    var path;
    path = '/api/news/';
    requestOptions = {
        url: apiOptions.server + path,
        method: "GET",
        json:  {}
    };
    request(requestOptions,
            function(apierr, apires, apibody){
                if(apires.statusCode == 200 && apibody.length){
                    renderHomepage(req, res, apibody);
            }
        }
    );
};

module.exports.doNewsLikes = function(req, res) {
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
                res.redirect('/');
        }
    }
);
};

var renderHomepage = function(req, res, body){
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
                            news: body
});
}
