var http = require('http'),
    fs =  require('fs');
http.createServer(function  (request, response) {
    var a = request.url;
    console.log(a);//排错关键一步。。。
    var b = a.split('/');   
    if (b[1] == 'aaa') {
        fs.readFile('./fortest.html', 'utf-8',function (err, data) { 
            if (err) throw err; 
            response.writeHead(200, {"Content-Type": "text/html"}); 
            response.write(data); 
            response.end();
        })        
    }else if (b[1] == 'bbb') {
    	fs.readFile('./fortest1.html', 'utf-8',function (err, data) { 
            if (err) throw err; 
            response.writeHead(200, {"Content-Type": "text/html"}); 
            response.write(data); 
            response.end(); 
        })
    }else if (b[2] == 'fortest.css') {
        fs.readFile('./styles/fortest.css', 'utf-8',function (err, data) { 
            if (err) throw err; 
            response.writeHead(200, {"Content-Type": "text/css"}); 
            response.write(data); 
            response.end();
        })
    }else if (b[2] == 'fortest.js') {
        fs.readFile('./js/fortest.js', 'utf-8',function (err, data) { 
            if (err) throw err; 
            response.writeHead(200, {"Content-Type": "application/javascript"});
            response.write(data); 
            response.end();
        })
    }
    else {
        response.writeHead(200, {"Content-Type": "text/plain;charset=utf-8"});
    	response.write('地址为：aaa和bbb');
        response.end(); 
    }
}).listen(8888);