import AppDispatcher from './AppDispatcher'
import AppTypes from './AppTypes'

const counterValues = {
  'First': 0,
  'Second': 10,
  'Third': 20
}

const CountStore = Object.assign({}, EventEmitter.prototype, {
  getCounterValues: function () {
    return counterValues
  },
  emitChange: function (CHANGE_EVENT) {
    this.emit(CHANGE_EVENT)
  },
  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback)
  },
  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback)
  }
})

CountStore.dispatchToken = AppDispatcher.register(action => {
  switch (action.type) {
    case AppTypes.INCREMENT:
      counterValues[action.counterCaption]++
      CountStore.emitChange(action.type)
      break;
    case AppTypes.DECREMENT:
      counterValues[action.counterCaption]--
      CountStore.emitChange(action.type)
      break;
    default:
      return counterValues
      break
  }  
})








