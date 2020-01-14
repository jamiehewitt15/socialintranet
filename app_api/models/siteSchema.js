var mongoose = require( "mongoose");

var siteSchema = new mongoose.Schema({
    title: {type: String, required: true},
    regions: [String],
    countries: [String],
    commodities: [String],
    users: [userSchema],
    pages: [pageSchema],    
    news:[newsSchema]
});


mongoose.model('website', siteSchema);