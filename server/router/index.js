import Router from 'koa-router'
import voiceRouter from './voice'

const router = new Router()

router.use('/api', voiceRouter.routes(), voiceRouter.allowedMethods())

export default router