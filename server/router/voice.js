import Router from 'koa-router'
import body from 'koa-better-body'

const voiceRouter = new Router()

voiceRouter.get('/api/voices', body(), async ctx => {
  const voices = await getAllVoices()
  ctx.body = voices
})

export default voiceRouter