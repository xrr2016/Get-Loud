import Router from 'koa-router'
import {
  getAllVoices,
  getOneVoice,
  createVoice,
  updateVoice,
  deleteVoice
} from '../controllers/voice_controler'

const voiceRouter = new Router()

voiceRouter.get('/voices', getAllVoices)
  .get('/voices/:id', getOneVoice)
  .post('/voices', createVoice)
  .put('/voices/:id', updateVoice)
  .delete('/voices/:id', deleteVoice)

export default voiceRouter