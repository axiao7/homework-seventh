var http = require('http'),
    fs =  require('fs');
http.createServer(function  (request, response) {
    var a = request.url;
    var b = a.split('/');
    if (b[1] == 'aaa') {
    	fs.readFile('./fortest.html', 'utf-8',function (err, data) {//读取内容 
            if (err) throw err; 
            response.writeHead(200, {"Content-Type": "text/html"});//注意这里 
            response.write(data); 
            response.end(); 
        })
    }else if (b[1] == 'bbb') {
    	fs.readFile('./fortest1.html', 'utf-8',function (err, data) {//读取内容 
            if (err) throw err; 
            response.writeHead(200, {"Content-Type": "text/html"});//注意这里 
            response.write(data); 
            response.end(); 
        })
    }else {
    	response.end('over');
    }
}).listen(8888);