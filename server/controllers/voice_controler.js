import Voice from '../models'

export const getAllVoices = async function () {
   const voices = await Voice.findAll() 
   return voices
}