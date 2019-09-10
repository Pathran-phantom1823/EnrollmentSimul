var fs = require('fs');
var tabs = require('./fstable');
exports.read = function (param,response) {
    var len = param.toLowerCase().length;
    var path = param.slice(1, len).split("/");
    var file = path[1] + ".csv";
    filename = file.toString();
    fs.readFile(filename, "utf8", function (err, data) {
        if (err) {
            response.writeHead(404, { 'Content-Type': 'text/html' });
            return response.end("404 Not Found");
        }
       tabs.creatTable(data,response);
    });
};

exports.normalRead = function(filename, response){
    fs.readFile(filename, function (err, data) {
        if (err) {
            response.writeHead(404, { 'Content-Type': 'text/html' });
            return response.end("404 Not Found");
        }
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(data);
        return response.end();
    });
}