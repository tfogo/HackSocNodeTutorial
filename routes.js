exports.index = function(req, res){
    res.render('index');
};

exports.chocolates = function(req, res){
    var numberOfChocs = 10;
    res.render('chocs', {numberOfChocs : numberOfChocs});
};

exports.open = function(repeat){ // Wow. Such closure.
    return function(req, res){
	res.render('open', {repeat : repeat});
    };
};
