import Router from 'koa-router'
import voiceRouter from './voice'

const router = new Router()
let home = new Router()

// 子路由1
home.get('/', async ( ctx )=>{
  let html = `
    <ul>
      <li><a href="/page/helloworld">/page/helloworld</a></li>
      <li><a href="/page/404">/page/404</a></li>
    </ul>
  `
  ctx.body = html
})

router.use('/', home.routes())
router.use('/api', voiceRouter.routes(), voiceRouter.allowedMethods())

export default router