const actions = {
  changeState: function ({commit}, videourl) {
    commit('changeState', videourl)
  },
  replaceNew ({commit}) {
    location.reload()
  },
  setId ({commit, state}, json) {
    state.getId = json.valId
    state.setIndex = json.musicIndex
    localStorage.setItem('nowIndex', json.musicIndex)
  }
}
export default actions
