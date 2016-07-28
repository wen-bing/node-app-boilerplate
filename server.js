var koa = require('koa');
var static = require('koa-static');
var session = require('koa-session');
var config = require('config');
var app = module.exports = koa();
app.use(session());
//app.use

var router = require('./routes');
app.use(router.middleware());

var port = config.get('server.port');
app.listen(port);
console.log("app started in port: " + port);
