var express=require('express');
var app=express();
app.set('view engine','jade');

app.get('/healthcheck',function(req,res)
{
    console.log('SERVER OK');
    req.co
    res.writeHead(200, {'Content-Type': 'text/html',
                        'called-from-pc': 'kanney'});
    res.end('SERVER OK');
});

app.post('/dc',function(req,res)
{
    console.log('reciveed rsposne from client');
    res.write('first line\n');
    
    var Addition=require('./addition.js');
    var resp=Addition.AddNumber(2,4);
    res.end('response recived:------------second line:'+resp);
});

var server=app.listen(3000,function()
{
});