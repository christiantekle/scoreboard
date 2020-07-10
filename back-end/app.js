const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-body');

app.use(bodyParser());
app.use(async ctx => ctx.body = 'hello world!');

app.listen(8000, ()=> {
    console.log('Server running at port 8000')
})