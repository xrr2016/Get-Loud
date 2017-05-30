import Koa from 'koa'
import voiceRouter from './router/voice'
import config from './config'

export const app = new Koa()

app.use(async (ctx, next) => {
  ctx.body = 'hello world'
  await next()
})

app.use(voiceRouter.routes()).use(voiceRouter.allowedMethods())

app.listen(config.port)

console.log(`App is listening on port ${config.port}.`)

export default app
