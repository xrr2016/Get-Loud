import Koa from 'koa'
import Sequelize from 'sequelize'
import { port, dbname, dbuser, dbpwd } from './config'
import { getAllVoices } from './controllers/topic_controler'
import voiceRouter from './router/voice'

export const app = new Koa()


app.use(async (ctx) => {
  ctx.body = 'hello world'
})

app.use(voiceRouter.routes()).use(voiceRouter.allowedMethods())

app.listen(port)

console.log(`App is listening on port ${port}.`)






