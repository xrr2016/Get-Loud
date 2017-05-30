import Router from 'koa-router'
import { getAllVoices } from '../controllers/voice_controler'

const voiceRouter = new Router()

voiceRouter.get('/voices', async ctx => {
  // const voices = await getAllVoices()
  ctx.body = 'voices router'
})

export default voiceRouter