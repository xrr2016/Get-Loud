import Voice from '../models'

// 获取全部voice
export const getAllVoices = async () => {
   const voices = await Voice.findAll() 
   return voices
}
// 获取单个voice
export const getVoice = async (_id) => {
    const voice = await Voice.find({_id: _id})
}
// 新增一个voice
export const createVoice = async () => {

}
// 更新一个voice
export const updateVoice = async () => {

}
// 删除一个voice
export const deleteVoice = async () => {

}
