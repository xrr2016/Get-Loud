import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import config from './config'
import router from './router'

const app = new Koa()

app.use(bodyParser())

app.use(router.routes()).use(router.allowedMethods())

app.listen(config.port)

console.log(`App is listening on port ${config.port}.`)

export default app
