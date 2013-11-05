exports.index = function(req, res){
    res.sendfile(__dirname + "/views/index.html")
}
