const Koa = require('Koa')
const Router = require('koa-router')
const Mongoose = require('koa-mongoose')
const BodyParser = require('koa-bodyparser')

const app = new Koa();
const router = new Router();

// app.use (async (ctx) => {
//     ctx.body = 'Ola Mundo - Koa 2.4.1 !!!'
// })
app.use(Mongoose({
    user: '',
    pass: '',
    host: 'localhost',
    port: 27107,
    database: 'koa2'

}))
app.use(BodyParser());

require('./src/index')(app, router);

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);
console.log('Curso Koa 2.4 - listening on port 3000');
