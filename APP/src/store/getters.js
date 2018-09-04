import state from './state'

const getter = {
  videourl () {
    return state.videourl
  },
  getId () {
    return state.getId
  },
  getIndex () {
    return state.setIndex
  }
}
export default getter
