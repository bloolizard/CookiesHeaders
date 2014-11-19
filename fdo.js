// Cache - expires

exports.edwin = function(req, res, next){
    res.set({
        'Cache-Contol': 'max-age=315569800', // in seconds per W3C
        'Expires':'Tue Nov 19 2024 00:00:00 GMT-0800 (PST)' //set the Expires Header for 10 years
    });
    next();
};




//Max age

//Etag

//todo: caching