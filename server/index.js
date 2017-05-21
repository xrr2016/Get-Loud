import Koa from 'koa'
const app = new Koa()
const port = process.env.PORT || 9999

app.use(async (ctx) => {
  ctx.body = 'hello world'
})

app.listen(port)

console.log(`App is listening on port ${port}.`)