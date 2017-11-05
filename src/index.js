import _ from 'lodash'
import numRef from './ref.json'

export const num2word = (num) => {
  return _.reduce(numRef, (accum, ref) => {
    return ref.num === num ? ref.word : accum
  }, '')
}

export const word2num = word => {
  return _.reduce(numRef, (accum, ref) => {
    return ref.word === word && word.toLowerCase() ? ref.num : accum
  }, -1)
}