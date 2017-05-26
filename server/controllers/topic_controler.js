import Voice from '../models'

const getAllVoices = async function () {
   const voices = await Voice.findAll() 
   return voices
}