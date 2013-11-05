exports.index = function(req, res){
    res.sendfile(__dirname + "/public/views/index.html");
}
